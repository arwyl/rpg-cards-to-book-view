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
            rpgCardJson.icon,
            rpgCardJson.color,
            rpgCardJson.icon_back,
            rpgCardJson.background_image,
            elements,
            tags,
            rpgCardJson.count
        );
    }

    static toRpgCardJson(card) {
        if (!card) throw new Error("Argumet 'card' should have value");

        let contents = card.elements.map(x => [x.name, ...x.params].join(' | '));

        return {
            title: card.title,
            count: card.count,
            icon: card.icon,
            color: card.color,
            icon_back: card.iconBack,
            background_image: card.backgroundImage,
            contents: contents,
            tags: card.tags
        };
    }

    constructor(
        title,
        icon,
        color,
        iconBack,
        backgroundImage,
        elements,
        tags,
        count
    ) {
        if (!title) throw new Error("Argumet 'title' should have value");

        this.title = title;
        this.elements = elements || [];
        this.tags = tags || [];
        this.count = count || 1;

        this.icon = icon;
        this.color = color;
        this.iconBack = iconBack;
        this.backgroundImage = backgroundImage;
    }
}

export default Card;