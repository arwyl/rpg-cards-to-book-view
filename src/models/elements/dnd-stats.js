import types from "./types";
import ElementBase from "./element-base";

class DndStats extends ElementBase {
    constructor(str, dex, con, int, wis, cha) {
        super(types.DNDSTATS);

        let stats = [10, 10, 10, 10, 10, 10];
        let mods = [0, 0, 0, 0, 0, 0];
        let params = [str, dex, con, int, wis, cha];
        for (let i = 0; i < 6; ++i) {
            stats[i] = params[i] || 0;
            var mod = Math.floor(((stats[i] - 10) / 2));
            if (mod >= 0) {
                mod = "+" + mod;
            } else {
                mod = "" + mod;
            }
            mods[i] = mod;
        }

        [this.str, this.dex, this.con, this.int, this.wis, this.cha] = stats;
        [this.strMod, this.dexMod, this.conMod, this.intMod, this.wisMod, this.chaMod] = mods;
    }
}

export default DndStats;