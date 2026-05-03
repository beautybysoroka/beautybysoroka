<script setup>
import { ref, computed } from 'vue'
import {useDictionaryStore} from "@/utils/dictionary/dictionary.js";
import {storeToRefs} from "pinia";
import { langs } from '@/constants/texts'
import routeNames from "@/constants/routeNames.js";
import { useRoute } from 'vue-router'

const route = useRoute()
const dictStore = useDictionaryStore()
const { currentLang } = storeToRefs(dictStore)
const { setDict } = dictStore

const switchLang = lang => { currentLang.value = lang }
const isMainPage = computed(() => route.name === routeNames.MAIN)
</script>

<template>
  <div class="lang-switcher" :class="{'lang-switcher_white': isMainPage}">
        <span
            :class="{ active: currentLang === langs.EN }"
            @click="setDict(langs.EN)"
        >{{ langs.EN }}</span>
    <span class="divider">|</span>
    <span
        :class="{ active: currentLang === langs.DK }"
        @click="setDict(langs.DK)"
    >{{ langs.DK }}</span>
  </div>
</template>


<style scoped lang="scss">
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 6px;
  &_white {
    color: #fff;
  }
}

span {
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s ease;
}

span.active {
  color: #efc79b;
}

.divider {
  cursor: default;
}
</style>