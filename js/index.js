import Card from "./card.js";
import storage from "./storage.js";
import renderCard from "./card-renderer.js";

const storageKey = "rpg-cards";

let cards = [];

function renderCards() {
    document.getElementById("div-cards").innerHTML = cards.map(x => renderCard(x)).join("\n");
    document.getElementById("span-count").textContent = cards.length;
}

const stored = storage.get(storageKey);

if (stored) {
    try {
        cards = JSON.parse(stored);
    }
    catch (err) {
        console.error("Error during loading cards from storage", err);
    }
}

renderCards();

const file = document.getElementById("file-load");

file.onchange = evt => {
    const files = evt.target.files;

    let count = files.length

    let allRead = () => {
        cards = newCards;
        storage.set(storageKey, JSON.stringify(cards));
        renderCards();
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

    evt.srcElement.form.reset();
};

document.getElementById("button-load").onclick = () => file.click();
document.getElementById("button-clear").onclick = () => {
    storage.remove(storageKey);
    cards = [];
    renderCards();
};