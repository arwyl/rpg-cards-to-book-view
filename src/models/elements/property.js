import types from "./types";
import ElementBase from "./element-base";

class Property extends ElementBase {
    constructor(name, value) {
        if (!name) throw new Error("Argumet 'name' should have value");

        super(types.PROPERTY);
        this.name = name;

        this.value = value;
    }
}

export default Property;