import types from "./types";
import ElementBase from "./element-base";

class Picture extends ElementBase {
    constructor(url, height) {
        super(types.PICTURE);

        this.url = url;
        this.height = height;
    }
}

export default Picture;