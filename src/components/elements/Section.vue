<template>
  <div class="pt-2">
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