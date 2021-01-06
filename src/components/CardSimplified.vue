<template>
  <article>
    <title-el :modelValue="modelValue.title"></title-el>
  </article>
</template>

<script>
import Card from "../models/card";
import title from "./Title.vue";

export default {
  name: "CardSimplified",
  props: {
    modelValue: Card,
  },
  components: {
    "title-el": title,
  },
};
</script>

<style scoped>
article {
  font-family: BookInsanity, Georgia, "Times New Roman", Times, serif;
  font-size: 0.8rem;
  page-break-inside: avoid;
  padding-bottom: 0;
}
</style>
