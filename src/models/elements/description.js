import types from "./types";
import ElementBase from "./element-base";

class Description extends ElementBase {
    constructor(name, value) {
        if (!name) throw new Error("Argumet 'name' should have value");

        super(types.DESCRIPTION);

        this.name = name;

        this.value = value;
    }
}

export default Description;