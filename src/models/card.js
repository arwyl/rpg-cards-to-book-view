class Card {
    constructor(
        title,
        icon,
        color,
        iconBack,
        backgroundImage,
        cardElements,
        tags,
        count
    ) {
        if (!title) throw new Error("Argumet 'title' should have value");

        this.title = title;
        this.elements = cardElements || [];
        this.tags = tags || [];

        this.count = count || 1;
        this.icon = icon;
        this.color = color;
        this.iconBack = iconBack;
        this.backgroundImage = backgroundImage;
    }
}

export default Card;