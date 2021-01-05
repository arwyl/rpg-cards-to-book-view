<template>
  <div
    :style="{
      backgroundImage: 'url(' + modelValue.url + ')',
      height: modelValue.height + 'px',
    }"
  ></div>
</template>

<script>
import Picture from "../../models/elements/picture";

export default {
  name: "Picture",
  props: {
    modelValue: Picture,
  },
};
</script>

<style scoped>
div {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>