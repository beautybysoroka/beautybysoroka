<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
<div class="button-block">
  {{text}}
</div>
</template>

<style scoped lang="scss">
.button-block {
  border-radius: 8px;
  background-color: #F9E1C7;
  width: fit-content;
  padding: 18px 40px;
  margin: 20px auto;
  text-transform: uppercase;
  text-align: center;
  transition:.8s;
  &:hover {
    cursor: pointer;
    background-color: #efc79b;
  }
}
</style>