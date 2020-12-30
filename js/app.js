import * as Vue from "https://unpkg.com/vue@3.0.4/dist/vue.esm-browser.prod.js"
import VueDraggableNext from "./vue-draggable-next.js";
import Card from "./card.js";
import storage from "./storage.js";
import sorter from "./card-sorter.js";
import DOMPurify from "./dompurify.js";

const storageKey = "rpg-cards";

function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

let initialCards = [];

const stored = storage.get(storageKey);

if (stored) {
    try {
        initialCards = JSON.parse(stored);
    }
    catch (err) {
        console.error("Error during loading cards from storage", err);
    }
}

const App = {
    components: {
        'draggable': VueDraggableNext.VueDraggableNext
    },
    data() {
        return {
            cards: initialCards,
            useSimplifiedView: false,
            sorting: {
                expanded: false,
                by: "title",
                byElement: "subtitle",
                propertyName: "",
                desc: false
            }
        }
    },
    methods: {
        moveDown(index) {
            if (index === this.cards.length - 1) return;

            const newIndex = index + 1;

            const height = document.querySelectorAll('.rpg-card')[newIndex].scrollHeight;

            const tmp = [this.cards[index], this.cards[newIndex]];
            this.cards.splice(index, 2, tmp[1], tmp[0]);

            this.store();

            window.scrollBy({
                top: height,
                behavior: 'smooth'
            });
        },
        moveUp(index) {
            if (index === 0) return;

            const newIndex = index - 1;

            const height = document.querySelectorAll('.rpg-card')[newIndex].scrollHeight;

            const tmp = [this.cards[newIndex], this.cards[index]];
            this.cards.splice(newIndex, 2, tmp[1], tmp[0]);

            this.store();

            window.scrollBy({
                top: -height,
                behavior: 'smooth'
            });
        },
        purify(str) {
            return DOMPurify.sanitize(str, { ALLOWED_TAGS: ["b"] });
        },
        getPictureUrl(elem) {
            const url = elem.params[0];
            return isValidURL(url) ? `url('${url}')` : '';
        },
        getPictureHeight(elem) {
            return Number.parseInt(elem.params[1]) || 0;
        },
        getDndStats(elem) {
            let stats = [10, 10, 10, 10, 10, 10];
            let mods = [0, 0, 0, 0, 0, 0];
            let params = elem.params;
            for (let i = 0; i < 6; ++i) {
                stats[i] = parseInt(params[i], 10) || 0;
                var mod = Math.floor(((stats[i] - 10) / 2));
                if (mod >= 0) {
                    mod = "+" + mod;
                } else {
                    mod = "" + mod;
                }
                mods[i] = mod;
            }

            return {
                stats: stats,
                mods: mods
            }
        },
        clear(e) {
            storage.remove(storageKey);
            this.cards = [];
            e.target.blur();
        },
        sort(e) {
            let func = null;

            if (this.sorting.by === "spellLevel") {
                func = c => c.elements.filter(e => e.name === "subtitle").map(e => parseInt(e.params[0], 10) || -1)[0];
            }
            else if (this.sorting.by === "element") {
                if (this.sorting.byElement === "subtitle") {
                    func = c => c.elements.filter(e => e.name === "subtitle").map(e => e.params[0])[0];
                }
                else {
                    func = c => c.elements.filter(e => e.name === this.sorting.propertyName).map(e => e.params[0])[0];
                }
            }
            else if (this.sorting.by === "firstTag") {
                func = c => c.tags[0];
            }

            this.cards = sorter(this.cards, func, this.sorting.desc);
            this.store();
            e.target.blur();
        },
        download(e) {
            const json = JSON.stringify(this.cards.map(c => Card.toRpgCardJson(c)), null, 4);

            const element = document.createElement('a');
            element.setAttribute("href", "data:application/JSON;charset=utf-8," + encodeURIComponent(json));
            element.setAttribute("download", "rpg-cards.json");

            element.style.display = "none";
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
            e.target.blur();
        },
        print(e) {
            window.print();
            e.target.blur();
        },
        openFileDialog(e) {
            document.getElementById("file-load").click();
            e.target.blur();
        },
        store() {
            storage.set(storageKey, JSON.stringify(this.cards));
        },
        load(e) {
            const files = e.target.files;

            let count = files.length

            const allRead = () => {
                this.cards = newCards;
                this.store();
            };

            let newCards = [];
            for (let i = 0, f; f = files[i]; i++) {
                const reader = new FileReader();

                reader.onload = () => {
                    try {
                        const data = JSON.parse(reader.result);
                        newCards = newCards.concat(data.map(x => Card.fromRpgCardJson(x)));
                    }
                    catch (err) {
                        console.error("File is not in correct format", err);
                    }

                    if (!--count) {
                        allRead();
                    }
                };

                reader.readAsText(f);
            }

            e.srcElement.form.reset();
        }
    }
};


const app = Vue.createApp(App);
const vm = app.mount('#app');