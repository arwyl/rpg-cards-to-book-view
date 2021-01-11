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
import { purify, purifyUrl } from "./purifier";

const DELIMITER = " | ";

function mapElementFromRpgCardJson(name, params) {
    switch (name) {
        case types.BULLET: return new Bullet(purify(params[0]));

        case types.DESCRIPTION: return new Description(purify(params[0]), purify(params[1]));

        case types.PICTURE: return new Picture(purifyUrl(params[0]), parseInt(params[1], 10));

        case types.PROPERTY: return new Property(purify(params[0]), purify(params[1]));

        case types.SECTION: return new Section(purify(params[0]), purify(params[1]));

        case types.SUBTITLE: return new Subtitle(purify(params[0]));

        case types.TEXT: return new Text(purify(params[0]));

        case types.DNDSTATS: return new DndStats(...params.map(x => parseInt(x, 10)));

        default: return new Unknown(name, params);
    }
}

function mapElementToRpgCardJson(elem) {
    switch (elem.type) {
        case types.BULLET: return [elem.type, elem.name].join(DELIMITER);

        case types.DESCRIPTION: return [elem.type, elem.name, elem.value].join(DELIMITER);

        case types.PICTURE: return [elem.type, elem.url, elem.height].join(DELIMITER);

        case types.PROPERTY: return [elem.type, elem.name, elem.value].join(DELIMITER);

        case types.SECTION: return [elem.type, elem.name, elem.value].join(DELIMITER);

        case types.SUBTITLE: return [elem.type, elem.name].join(DELIMITER);

        case types.TEXT: return [elem.type, elem.name].join(DELIMITER);

        case types.DNDSTATS: return [elem.type, elem.str, elem.dex, elem.con, elem.int, elem.wis, elem.cha].join(DELIMITER);

        default: return [elem.name, ...elem.params].join(DELIMITER);
    }
}

function fromRpgCardJson(rpgCardJson) {
    if (!rpgCardJson) throw new Error("Argumet 'rpgCardJson' should have value");

    const contents = (rpgCardJson.contents || []).map(x => x.split(DELIMITER).map(str => str.trim()));

    const elements = contents.map(x => mapElementFromRpgCardJson(x[0], x.splice(1)));

    const tags = (rpgCardJson.tags || []).map(x => x.trim().toLowerCase());

    return new Card(
        rpgCardJson.title,
        rpgCardJson.icon,
        rpgCardJson.color,
        rpgCardJson.icon_back,
        rpgCardJson.background_image,
        elements,
        tags,
        rpgCardJson.count
    );
}

function toRpgCardJson(card) {
    if (!card) throw new Error("Argumet 'card' should have value");

    const contents = card.elements.map(x => mapElementToRpgCardJson(x)).join("\r\n");

    return {
        title: card.title,
        count: card.count,
        icon: card.icon,
        color: card.color,
        icon_back: card.iconBack,
        background_image: card.backgroundImage,
        contents: contents,
        tags: card.tags
    };
}

export { fromRpgCardJson, toRpgCardJson }