import DOMPurify from './dompurify.js';

function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

function purifyUrl(url) {
    return isValidURL(url) ? url : "";
}

function purify(str) {
    return DOMPurify.sanitize(str, { ALLOWED_TAGS: ["b"] });
}

function renderDndstats(elem) {
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
        mods[i] = "&nbsp;(" + mod + ")";
    }

    var result = `
<div class="dndatsts-wrapper">
    <table>
        <tbody>
            <tr>
                <th>STR</th>
                <th>DEX</th>
                <th>CON</th>
                <th>INT</th>
                <th>WIS</th>
                <th>CHA</th>
            </tr>
            <tr>
                <td>${stats[0] + mods[0]}</td>
                <td>${stats[1] + mods[1]}</td>
                <td>${stats[2] + mods[2]}</td>
                <td>${stats[3] + mods[3]}</td>
                <td>${stats[4] + mods[4]}</td>
                <td>${stats[5] + mods[5]}</td>
            </tr>
        </tbody>
    </table>
</div>`
    return result;
}

const elementRenderers = {
    subtitle: elem => `<div class="subtitle"><em>${purify(elem.params[0])}</em></div>`,
    property: elem => `<div><strong>${purify(elem.params[0])}</strong>: ${purify(elem.params[1])}</div>`,
    description: elem => `<div><strong>${purify(elem.params[0])}</strong>: ${purify(elem.params[1])}</div>`,
    section: elem => `<div class="section"><strong><u>${purify(elem.params[0])}</u></strong>: ${purify(elem.params[1])}</div>`,
    bullet: elem => `<ul><li>${purify(elem.params[0])}</li></ul>`,
    picture: elem => `<div class="picture" style="background-image: url('${purifyUrl(elem.params[0])}'); height: ${Number.parseInt(elem.params[1]) || 0}px"></div>`,
    dndstats: renderDndstats,
    text: elem => `<div>${purify(elem.params[0])}</div>`,
    rule: () => ""
};

function renderCard(card) {
    if (!card) throw new Error("Argumet 'card' should have value");

    const elementsHtml = card.elements.map(e => {
        var renderer = elementRenderers[e.name];
        if (!renderer) {
            console.log(`unknown element ${e.name}`, e);
            return "";
        }
        return renderer(e)
    });
    return `
<div class="rpg-card">
    <div class="title"><strong>${purify(card.title)}</strong></div>
    ${elementsHtml.join("\n")}
    <hr />
</div>`;
}

export default renderCard;