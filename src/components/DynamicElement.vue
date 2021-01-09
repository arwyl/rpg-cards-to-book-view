<template>
  <component :is="elementComponent" v-bind:modelValue="model"></component>
</template>

<script>
import bullet from "./elements/Bullet.vue";
import description from "./elements/Description.vue";
import dndstats from "./elements/DndStats.vue";
import picture from "./elements/Picture.vue";
import property from "./elements/Property.vue";
import section from "./elements/Section.vue";
import subtitle from "./elements/Subtitle.vue";
import text from "./elements/Text.vue";

import types from "../models/elements/types";

const typesMapping = {};
typesMapping[types.BULLET] = "bullet";
typesMapping[types.DESCRIPTION] = "description";
typesMapping[types.DNDSTATS] = "dndstats";
typesMapping[types.PROPERTY] = "property";
typesMapping[types.SECTION] = "section-el";
typesMapping[types.SUBTITLE] = "subtitle";
typesMapping[types.TEXT] = "text-el";
typesMapping[types.PICTURE] = "picture-el";

export default {
  // custom method to use from Card.vue
  isKnownType(type) {
    return !!typesMapping[type];
  },
  name: "DynamicElement",
  props: ["modelValue"],
  data() {
    return {
      model: this.modelValue,
    };
  },
  computed: {
    elementComponent() {
      return typesMapping[this.model.type];
    },
  },
  components: {
    bullet,
    description,
    dndstats,
    "picture-el": picture,
    property,
    "section-el": section,
    subtitle,
    "text-el": text,
  },
};
</script>