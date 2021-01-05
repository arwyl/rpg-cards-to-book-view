<template>
  <div v-html="modelValue.text"></div>
</template>

<script>
import Text from "../../models/elements/text";

export default {
  name: "Text",
  props: {
    modelValue: Text,
  },
};
</script>