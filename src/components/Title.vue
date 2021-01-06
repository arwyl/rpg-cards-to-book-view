<template>
  <div class="title">
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
  font-size: 1.5rem;
  font-family: "Mr Eaves Smallcaps", serif;
  color: #58170d;
}
</style>
