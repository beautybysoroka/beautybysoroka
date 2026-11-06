<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import routeNames from '@/constants/routeNames'

const route = useRoute()
const isMainPage = computed(() => route.name === routeNames.MAIN)
const languageLink = locale => ({ name: route.name, params: { ...route.params, locale }, query: route.query, hash: route.hash })
</script>

<template>
  <div v-if="route.meta.page" class="lang-switcher" :class="{'lang-switcher_white': isMainPage}">
    <RouterLink :to="languageLink('')" :class="{ active: !route.params.locale }" hreflang="en" lang="en">EN</RouterLink>
    <span>|</span>
    <RouterLink :to="languageLink('da')" :class="{ active: route.params.locale === 'da' }" hreflang="da" lang="da">DK</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  a { color: inherit; }
  a.active { color: #efc79b; }
  &_white { color: #fff; }
}
</style>
