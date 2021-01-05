<template>
  <div>
    <strong v-html="modelValue.name"></strong>:
    <span v-html="modelValue.value"></span>
  </div>
</template>

<script>
import Property from "../../models/elements/property";

export default {
  name: "Property",
  props: {
    modelValue: Property,
  },
};
</script>