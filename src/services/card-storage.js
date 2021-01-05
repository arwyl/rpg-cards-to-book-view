import Card from "../models/card";
import Bullet from "../models/elements/bullet";
import Description from "../models/elements/description";
import Picture from "../models/elements/picture";
import Property from "../models/elements/property";
import Section from "../models/elements/section";
import Subtitle from "../models/elements/subtitle";
import Text from "../models/elements/text";
import DndStats from "../models/elements/dnd-stats";
import types from "../models/elements/types";
import Unknown from "../models/elements/unknown";

const StorageKey = "rpg-cards-v3";

function mapElementFromRaw(elem) {
    switch (elem.type) {
        case types.BULLET: return new Bullet(elem.name);

        case types.DESCRIPTION: return new Description(elem.name, elem.value);

        case types.PICTURE: return new Picture(elem.url, elem.height);

        case types.PROPERTY: return new Property(elem.name, elem.value);

        case types.SECTION: return new Section(elem.name, elem.value);

        case types.SUBTITLE: return new Subtitle(elem.name);

        case types.TEXT: return new Text(elem.text);

        case types.DNDSTATS: return new DndStats(elem.str, elem.dex, elem.con, elem.int, elem.wis, elem.cha);

        case types.UNKNOWN: return new Unknown(elem.name, elem.params);

        default: throw new Error("Unknown element from storage " + JSON.stringify(elem));
    }
}

function fromRaw(card) {
    if (!card) throw new Error("Argumet 'card' should have value");

    let elements = card.elements.map(x => mapElementFromRaw(x));

    return new Card(
        card.title,
        card.icon,
        card.color,
        card.iconBack,
        card.backgroundImage,
        elements,
        card.tags,
        card.count
    );
}

function get() {
    const str = localStorage.getItem(StorageKey);

    if (!str) return;

    const raw = JSON.parse(str);

    const res = raw.map(x => fromRaw(x));

    return res;
}

function set(value) {
    localStorage.setItem(StorageKey, value ? JSON.stringify(value) : undefined);
}

function clear() {
    return localStorage.removeItem(StorageKey);
}

export default {
    get,
    set,
    clear
};