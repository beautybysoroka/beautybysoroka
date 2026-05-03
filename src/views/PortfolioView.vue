<script setup lang="ts">
import routeNames from '@/constants/routeNames'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import {useDictionaryStore} from "@/utils/dictionary/dictionary";
import {storeToRefs} from "pinia";

const dictStore = useDictionaryStore()
const { dict } = storeToRefs(dictStore)

const router = useRouter()
const routeToBrides = () => { router.push({name: routeNames.PORTFOLIO, hash: '#brides'})}
const routeToCommercial = () => { router.push({name: routeNames.PORTFOLIO, hash: '#commercial'})}

const openedImage = ref(-1)

const regexImgPlusVideo = '*.{png,jpg,jpeg,gif,svg,mp4,mov}'

const bridesSrc = import.meta.glob('../portfolio/brides/*.{png,jpg,jpeg,gif,svg,mp4,webp}', {
  eager: true,
  import: 'default'
}) as Record<string, string>
const bridesPhotos = Object.values(bridesSrc)

const commercialSrc = import.meta.glob('../portfolio/commercial/*.{png,jpg,jpeg,gif,svg,mp4,webp}', {
  eager: true,
  import: 'default'
}) as Record<string, string>
const commercialPhotos = Object.values(commercialSrc)

const toggleOpenedImage = (index: number) => {
  openedImage.value = openedImage.value === index ? -1 : index
}

const isCurrentImageOpened = (index: number) => index === openedImage.value
const isVideo = (src: string) => src.includes('mp4')
</script>

<template>
  <div class="portfolio-wrapper common-wrapper">
    <div class="portfolio-menu">
      <p @click="routeToBrides()">{{ dict.brides }}</p>
      <p @click="routeToCommercial()">{{dict.commercial}}</p>
    </div>
    <h2 id="brides">{{ dict.brides }}</h2>
    <div  class="gallery gallery-brides">
      <template v-for="(src, idx) in bridesPhotos">
      <video
          :src="src"
          @click="toggleOpenedImage(idx)"
          v-if="isVideo(src)"
          autoplay muted loop playsinline
          :class="{'opened' : isCurrentImageOpened(idx)}"
      >
      </video>
      <img
          v-else
          :key="src"
          :src="src"
          alt="gallery image"
          @click="toggleOpenedImage(idx)"
          :class="{'opened' : isCurrentImageOpened(idx)}"
      />
      </template>
    </div>
    <h2 id="commercial">{{ dict.commercial }}</h2>
    <div  class="gallery gallery-commercial">
      <template v-for="(src, idx) in commercialPhotos" :key="src">
        <video :src="src"
               @click="toggleOpenedImage(idx)"
               v-if="isVideo(src)"
               :class="{'opened' : isCurrentImageOpened(idx)}"
               autoplay muted loop playsinline>
        </video>
        <img
            v-else
            :src="src"
            alt="gallery image"
            @click="toggleOpenedImage(idx)"
            :class="{'opened' : isCurrentImageOpened(idx)}"
        />
      </template>
    </div>
  </div>
</template>


<style scoped lang="scss">
.portfolio-wrapper {
  padding: 16px;

  h2 {
    text-align: left;
    margin-bottom: 16px;
    text-transform: uppercase;
    font-size: 34px;
  }
}
.portfolio-menu {
  display: flex;
  grid-gap: 20px;
  margin-bottom: 24px;
  p {
    font-size: 18px;
    text-transform: uppercase;
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  &-brides {
    margin-bottom: 40px;
  }
}
.gallery img, video {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.opened {
  grid-column: 1 / -1;
  animation: fadeIn 2s ease forwards;
}
</style>

