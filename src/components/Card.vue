<template>
  <article>
    <title-el :modelValue="modelValue.title"></title-el>
    <dynamic-element
      v-for="(elem, index) in knownElements"
      :modelValue="elem"
      :key="index"
    ></dynamic-element>
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
  computed: {
    knownElements() {
      return this.modelValue.elements.filter((e) =>
        dynamicElement.isKnownType(e.type)
      );
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
