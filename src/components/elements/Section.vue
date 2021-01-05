<template>
  <div>
    <strong><u v-html="modelValue.name"></u></strong>:
    <span v-html="modelValue.value"></span>
  </div>
</template>

<script>
import Section from "../../models/elements/section";

export default {
  name: "Section",
  props: {
    modelValue: Section,
  },
};
</script>

<style scoped>
div {
  margin-top: 0.8rem;
}
</style>