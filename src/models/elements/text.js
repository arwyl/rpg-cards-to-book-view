import types from "./types";
import ElementBase from "./element-base";

class Text extends ElementBase {
    constructor(text) {
        super(types.TEXT);
        this.text = text;
    }
}

export default Text;