import types from "./types";
import ElementBase from "./element-base";

class Bullet extends ElementBase {
    constructor(name) {
        if (!name) throw new Error("Argumet 'name' should have value");

        super(types.BULLET);

        this.name = name;
    }
}

export default Bullet;