<template>
  <div class="fs-4 title">
    <strong>{{ modelValue }}</strong>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    modelValue: String,
  },
};
</script>

<style scoped>
.title {
  font-family: "Mr Eaves Smallcaps", serif;
}
</style>
