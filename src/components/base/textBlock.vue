<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  text2: {
    type: String,
    default: ''
  }
})
</script>

<template>
<div class="text-block">
  <h2>{{title}}</h2>
  <p>{{text}}</p>
  <br>
  <p>{{text2}}</p>
</div>
</template>

<style scoped>
h2 {
  text-transform: uppercase;
}
</style>