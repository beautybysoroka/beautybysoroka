<script setup lang="ts">
const photos: string[] = []

for (let i=1;i<11;i++) {
  photos.push(`/assets/img/photos/${i.toString()}.jpg`)
}
</script>

<template>
<div class="gallery" >
  <img v-for="path in photos" :src="path" alt="img">

</div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  width: 70vw;
}
.gallery img {
  width: 100%;
}
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    width: 90vw;
  }
}
</style>