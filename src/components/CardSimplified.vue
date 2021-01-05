<template>
  <article>
    <div class="title">
      <strong>{{ modelValue.title }}</strong>
    </div>
  </article>
</template>

<script>
import Card from "../models/card";

export default {
  name: "CardSimplified",
  props: {
    modelValue: Card,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article {
  font-family: BookInsanity, Georgia, "Times New Roman", Times, serif;
  font-size: 0.8rem;
  page-break-inside: avoid;
  padding-bottom: 0;
}

.title {
  font-size: 1.5rem;
  font-family: "Mr Eaves Smallcaps", serif;
  color: #58170d;
}
</style>
