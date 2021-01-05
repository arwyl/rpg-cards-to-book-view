<template>
  <article>
    <div class="title">
      <strong>{{ modelValue.title }}</strong>
    </div>

    <template v-for="(elem, index) in modelValue.elements">
      <bullet
        v-if="elem.type === types.BULLET"
        :key="index"
        :modelValue="elem"
      ></bullet>

      <description
        v-if="elem.type === types.DESCRIPTION"
        :key="index"
        :modelValue="elem"
      ></description>

      <dndstats
        v-if="elem.type === types.DNDSTATS"
        :key="index"
        :modelValue="elem"
      ></dndstats>

      <picture-el
        v-if="elem.type === types.PICTURE"
        :key="index"
        :modelValue="elem"
      ></picture-el>

      <property
        v-if="elem.type === types.PROPERTY"
        :key="index"
        :modelValue="elem"
      ></property>

      <section-el
        v-if="elem.type === types.SECTION"
        :key="index"
        :modelValue="elem"
      ></section-el>

      <subtitle
        v-if="elem.type === types.SUBTITLE"
        :key="index"
        :modelValue="elem"
      ></subtitle>

      <text-el
        v-if="elem.type === types.TEXT"
        :key="index"
        :modelValue="elem"
      ></text-el>
    </template>
  </article>
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

import Card from "../models/card";
import types from "../models/elements/types";

export default {
  name: "Card",
  props: {
    modelValue: Card,
  },
  data() {
    return {
      types: types,
    };
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

<style scoped>
article {
  font-family: BookInsanity, Georgia, "Times New Roman", Times, serif;
  font-size: 0.8rem;
  page-break-inside: avoid;
  padding-bottom: 1rem;
}

article > * {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}

.title {
  font-size: 1.5rem;
  font-family: "Mr Eaves Smallcaps", serif;
  color: #58170d;
}
</style>
