<script setup>
import { ref, computed } from "vue";
import routeNames from '@/constants/routeNames'
import { useRoute } from 'vue-router'

const route = useRoute()
import {useDictionaryStore} from "@/utils/dictionary/dictionary.js";
import {storeToRefs} from "pinia";

const dictStore = useDictionaryStore()
const { dict } = storeToRefs(dictStore)

const menuItems = computed(() => [
  { to:routeNames.MAIN, label: dict.value.menu.home },
  { to: routeNames.PLAN, label: dict.value.menu.plan },
  { to: routeNames.PORTFOLIO, label: dict.value.menu.portfolio },
  { to: routeNames.PRICE, label: dict.value.menu.price },/*,
      { to: routeNames.QUASTIONNAIRE, label: "Questionnaire" },*/
  { to: routeNames.MAIN, hash: '#contacts', label: dict.value.menu.contacts }
])

const isOpen = ref(false);
const isMainPage = computed(() => route.name === routeNames.MAIN)
</script>
<template>
  <div class="burger-menu">
    <!-- Burger Icon -->
    <button class="burger-icon" @click="isOpen = !isOpen" :class="{ 'burger-icon_white': isMainPage }">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>

    <!-- Sidebar Menu -->
    <transition name="slide">
      <nav v-if="isOpen" class="menu">
        <router-link
            v-for="item in menuItems"
            :key="item.to"
            :to="{ name: item.to, hash: item?.hash }"
            class="menu-link"
            @click="isOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.burger-menu {
  position: relative;
  z-index: 1000;
}

/* Burger Icon */
.burger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  &_white {
    span {
      background-color: #fff !important;
    }
  }
}

.burger-icon span {
  height: 1px;
  width: 100%;
  background-color: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger-icon span.open {
  background-color: #848484;
  z-index: 1000;
}
/* Animate icon when open */
.burger-icon span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger-icon span.open:nth-child(2) {
  opacity: 0;
}
.burger-icon span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}

/* Sidebar Menu */
.menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: #e0f3f6;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.4);

  a {
    /*text-transform: uppercase;*/
  }
}

/* Sidebar Links */
.menu-link {
  color: #333333;
  padding: 0 20px 15px 20px;
  text-decoration: none;
  transition: background 0.2s;
  text-align: left;
  font-size: 35px;
}

.menu-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Slide-in animation */
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  transition: transform 0.3s ease;
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-active {
  transition: transform 0.3s ease;
}
</style>
