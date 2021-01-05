<template>
  <div>
    <strong v-html="modelValue.name"></strong>:
    <span v-html="modelValue.value"></span>
  </div>
</template>

<script>
import Description from "../../models/elements/description";
export default {
  name: "Description",
  props: {
    modelValue: Description,
  },
};
</script>