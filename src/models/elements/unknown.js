import types from "./types";
import ElementBase from "./element-base";

class Unknown extends ElementBase {
    constructor(name, params) {
        super(types.UNKNOWN);

        this.name = name;
        this.params = params;
    }
}

export default Unknown;