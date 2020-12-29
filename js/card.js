class CardElement {
    constructor(name, params) {
        if (!name) throw new Error("Argumet 'name' should have value");
        this.name = name;

        this.params = params || [];
    }
}

class Card {

    static fromRpgCardJson(rpgCardJson) {
        if (!rpgCardJson) throw new Error("Argumet 'rpgCardJson' should have value");

        let contents = (rpgCardJson.contents || []).map(x => x.split("|").map(str => str.trim()));

        let elements = contents.map(x => new CardElement(x[0], x.splice(1)));

        let tags = (rpgCardJson.tags || []).map(x => x.trim().toLowerCase());

        return new Card(
            rpgCardJson.title,
            elements,
            tags,
            rpgCardJson.count
        );
    }

    constructor(
        title,
        elements,
        tags,
        count
    ) {
        if (!title) throw new Error("Argumet 'title' should have value");

        this.title = title;
        this.elements = elements || [];
        this.tags = tags || [];
        this.count = count || 1;
    }
}

export default Card;