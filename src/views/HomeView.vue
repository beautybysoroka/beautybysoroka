<script setup lang="ts">
import textBlock from '@/components/base/textBlock.vue'
import imageBlock from '@/components/base/ImageBlock.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useRouter } from "vue-router"
import routeNames from '@/constants/routeNames'
import {
  homeTitle1,
  homeTitle2,
  homeTitle3,
  homeTitle4,
  homeTitle5,
  homeTitle6,
  homeText1,
  homeText2,
  homeText3,
  homeText3_2,
  homeText4,
  homeText5,
  homeText6,
  seePriceListButtonText,
  checkForMoreButtonText
}
from '@/constants/texts'
import {useDictionaryStore} from "@/utils/dictionary/dictionary";
import {storeToRefs} from "pinia";

const router = useRouter()

const dictStore = useDictionaryStore()
const { dict } = storeToRefs(dictStore)


const routeTo = (routeName: string) => { router.push({ name: routeName}) }


</script>

<template>
  <div class="about-wrapper">
    <img class="image-block__image-0" src="/assets/img/photos/home/Mariia.webp" alt="Mariia Soroks">
    <img class="image-block__image-0_desktop" src="/assets/img/photos/home/Mariia-desktop.webp" alt="Mariia Soroks">
    <textBlock
    :title="dict.homeTitle1"
    class="text-block-margin"
    :text="dict.homeText1"
    />
    <imageBlock class="image-block__1">
      <img class="image-block__image-1" src="/assets/img/photos/home/11.webp" alt="">
    </imageBlock>
    <textBlock
        :title="dict.homeTitle2"
        class="text-block-margin"
        :text="dict.homeText2"
    />
    <imageBlock class="image-block__2">
      <img class="image-block__image-2_1" src="/assets/img/photos/home/9.webp" alt="">
      <img class="image-block__image-2_2" src="/assets/img/photos/home/4.webp" alt="">
    </imageBlock>
    <textBlock
        :title="dict.homeTitle3"
        class="text-block__3"
        :text="dict.homeText3"
        :text2="dict.homeText3_2"
    />
    <imageBlock class="image-block__3">
      <img class="image-block__image-3_1" src="/assets/img/photos/home/8.webp" alt="">
      <img class="image-block__image-3_2" src="/assets/img/photos/home/ann.webp" alt="">
      <img class="image-block__image-3_3" src="/assets/img/photos/home/7.webp" alt="">
    </imageBlock>
    <textBlock
        :title="dict.homeTitle4"
        class="text-block-margin text-block-margin_bottom_20"
        :text="homeText4"
    />
    <BaseButton :text="'What is the plan? '" @click="routeTo(routeNames.PLAN)"/>
    <img class="image-block__image-4" src="/assets/img/photos/home/6.webp" alt="">
    <textBlock
        :title="dict.homeTitle5"
        :text="dict.homeText5"
        class="text-block-margin text-block-price text-block-margin_width-60"
    />
    <BaseButton :text="dict.seePriceListButtonText" @click="routeTo(routeNames.PRICE)"/>
    <imageBlock class="image-block__5">
      <img class="image-block__image-5" src="/assets/img/photos/home/12.webp" alt="">
    </imageBlock>

    <textBlock
        :title="dict.homeTitle6"
        class="text-block-margin text-block-margin_width-70"
        :text="dict.homeText6"
    />
    <BaseButton :text="dict.checkForMoreButtonText" @click="routeTo(routeNames.PORTFOLIO)"/>
  </div>
</template>

<style scoped lang="scss">
.text-block-margin {
  margin-left: 24px;
  width: 80%;
  text-align: left;
  margin-top: 40px;

  &_bottom_20 {
    margin-bottom: 40px;
  }
  &_width-60 {
    width: 60%;
  }
  &_width-70 {
    width: 70%;
  }
}

.text-block{
  &-price h2{
    font-size: 34px;
  }
  &__3{
    text-align: right;
    width: 80%;
    margin-left: 15%;

    h2 {
      text-transform: uppercase !important;
    }
  }
}
body {
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
}

.about-wrapper p {
  text-align: left;
  margin: 80px 0 0 -40px;
}
@media (max-width: 768px) {
  .image-block {
    &__image {
      &-0 {
        &_desktop {
          display: none;
        }
      }
    }
  }
}
@media (min-width: 769px) {
  .image-block {
    &__image {
      &-0 {
        width: 100%;
        display: none;
      }
      &-1 {
        width: 90%;
      }
    }
  }
}
  .about-wrapper {
    width: 100vw;
    margin: 0;
  }
  .about-wrapper p {
    margin-left: 0;
  }

  .image-block {
    &__1 {
      margin-top: 40px;
      text-align: right;
    }
    &__2 {
      margin-top: 40px;
      margin-left: 20px;
      text-align: left;
      overflow-x: hidden;
      position: relative;
      width: calc(100% - 20px);
    }
    &__3 {
      text-align: right;
      margin-top: 40px;
    }
    &__5 {
      text-align: right;
      margin-top: 40px;
      margin-bottom: 50px;
    }
    &__image {
      &-0 {
      width: 100%;
      }
      &-1 {
      width: 90%;
    }
      &-2_1 {
        width: 80%;
      }
      &-2_2 {
        width: 90%;
        transform: translate(50px, -45px);
      }
      &-3_1 {
        width: 60%;
        position: absolute;
        left: 0;
        top: 22vh;
      }
      &-3_2 {
        width: 50%;
      }
      &-3_3 {
        width: 70%;
        margin-top: 15vh;
        z-index: 2;
        position: relative;
      }
      &-4 {
        width: 100%;
        margin-top: 40px;
      }
      &-5 {
        width: 75%;
        margin-right: 12px;
      }
    }
  }
.about-wrapper {
  margin: -54px auto 40px;
  @media(min-width: 769px) {
    width: 40vw;
    .image-block__image-0_desktop {
      margin-left: -30vw;
      width: 100vw;
    }
  }
}
</style>
