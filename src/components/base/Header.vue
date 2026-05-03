<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import routeNames from '@/constants/routeNames'
import Menu from '@/components/menu.vue'
import LangSwitcher from '@/components/base/langSwitcher.vue'
import { computed } from 'vue'

const router = useRouter()
const routeToMain = () => { router.push({ name: routeNames.MAIN }) }
const route = useRoute()
const isNotMainPage = computed(() => route.name !== routeNames.MAIN )
</script>

<template>
  <div class="web-header">
    <LangSwitcher />
    <img  v-if="isNotMainPage" class="web-header__logo" src="/assets/img/base/logo.svg" alt="" @click="routeToMain()">
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
  width: 35%;
  @media (min-width: 769px) {
    width: 15%;
  }
}
</style>