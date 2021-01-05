class ElementBase {
    constructor(type) {
        if (!type) throw new Error("Argumet 'type' should have value");

        this.type = type;
    }
}

export default ElementBase;