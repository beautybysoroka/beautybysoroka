<script setup lang="ts">
import { usePageSeo } from '@/seo'
import Footer from '@/components/Footer.vue'
import Header from '@/components/base/Header.vue'
const { heading } = usePageSeo()
</script>

<template>
  <div class="app-wrapper">
    <Header/>
    <main>
      <h1 v-if="heading && $route.meta.page !== 'home'" class="page-heading">{{ heading }}</h1>
      <RouterView />
    </main>
  <Footer />
  </div>
</template>

<style>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Raleway,serif;
  background: #fff;

  @media(min-width: 769px) {
    margin: 0 auto;
  }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

h2, p {
  margin: 0;
}
</style>
