<script setup lang="ts">

</script>

<template>
  <div class="image-wrapper">
    <slot/>
  </div>
</template>

<style lang="scss">
.image-wrapper {
  width: 100%;
  position: relative;
}
@media (min-width: 768px) {
  .image-wrapper {
    width: 30vw;
    margin: 0 auto;
  }
}
</style>