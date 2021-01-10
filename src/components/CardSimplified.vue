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