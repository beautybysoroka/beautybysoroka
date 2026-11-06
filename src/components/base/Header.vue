<script setup lang="ts">
import { useRoute } from 'vue-router'
import routeNames from '@/constants/routeNames'
import Menu from '@/components/menu.vue'
import LangSwitcher from '@/components/base/langSwitcher.vue'
import { computed } from 'vue'

const route = useRoute()
const isNotMainPage = computed(() => route.name !== routeNames.MAIN )
</script>

<template>
  <div class="web-header">
    <LangSwitcher />
    <RouterLink v-if="isNotMainPage" class="web-header__logo" :to="{ name: routeNames.MAIN, params: { locale: route.params.locale } }" aria-label="Beauty by Soroka — Home">
      <img src="/assets/img/base/logo.svg" alt="Beauty by Soroka">
    </RouterLink>
    <Menu />
  </div>
</template>

<style scoped lang="scss">
.web-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  z-index: 1000;
}

.web-header__logo {
  img { width: 100%; }
  width: 35%;
  @media (min-width: 769px) {
    width: 15%;
  }
}
</style>