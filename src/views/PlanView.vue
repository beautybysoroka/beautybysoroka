<script setup lang="ts">
import {useDictionaryStore} from "@/utils/dictionary/dictionary";
import { storeToRefs} from "pinia";

const dictStore = useDictionaryStore()
const { dict } = storeToRefs(dictStore)
</script>

<template>
<div class="plan-wrapper">
  <h2>{{ dict.beReady }}</h2>
  <p v-for="(text, index) in dict.planCareText">
    {{index + 1}}. {{text}}
  </p>
  <h2>{{dict.prepareThePlace}}</h2>
  <p v-for="(text, index) in dict.planPlaceText">
    {{index + 1}}. {{text}}
  </p>
</div>
</template>

<style scoped lang="scss">
.plan-wrapper {
  padding: 16px;

  @media (min-width: 769px) {
    width: 80%;
    margin: 0 auto;
  }

  h2 {
    font-size: 30px;
    text-align: left;
    margin-bottom: 8px;
  }
  p {
    text-align: left;
    margin-bottom: 16px;
  }
}
</style>