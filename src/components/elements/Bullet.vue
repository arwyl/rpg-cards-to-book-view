<template>
  <ul>
    <li v-html="modelValue.name"></li>
  </ul>
</template>

<script>
import Bullet from "../../models/elements/bullet";

export default {
  name: "Bullet",
  props: {
    modelValue: Bullet,
  },
};
</script>