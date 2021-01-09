<template>
  <article>
    <title-el :modelValue="modelValue.title"></title-el>

    <template v-for="(elem, index) in modelValue.elements">
      <dynamic-element
        :modelValue="elem"
        :key="index"
        v-if="isKnown(elem)"
      ></dynamic-element>
    </template>
  </article>
</template>

<script>
import dynamicElement from "./DynamicElement.vue";
import title from "./Title.vue";
import Card from "../models/card";

export default {
  name: "Card",
  props: {
    modelValue: Card,
  },
  methods: {
    isKnown(elem) {
      return dynamicElement.isKnownType(elem.type);
    },
  },
  components: {
    "dynamic-element": dynamicElement,
    "title-el": title,
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
</style>
