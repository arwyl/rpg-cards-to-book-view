<template>
  <div><em v-html="modelValue.name"></em></div>
</template>

<script>
import Subtitle from "../../models/elements/subtitle";

export default {
  name: "Subtitle",
  props: {
    modelValue: Subtitle,
  },
};
</script>

<style scoped>
div {
  font-family: Georgia, serif;
}
</style>