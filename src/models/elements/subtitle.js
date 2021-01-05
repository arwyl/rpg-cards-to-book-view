import types from "./types";
import ElementBase from "./element-base";

class Subtitle extends ElementBase {
    constructor(name) {
        if (!name) throw new Error("Argumet 'name' should have value");

        super(types.SUBTITLE);

        this.name = name;
    }
}

export default Subtitle;