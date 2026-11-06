<script setup lang="ts">
import { RouterLink, useRoute, type RouteLocationRaw } from 'vue-router'
import { computed, type PropType } from 'vue'

const props = defineProps({
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    default: undefined
  },
  text: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const destination = computed(() => {
  if (typeof props.to === 'object' && 'name' in props.to) {
    return { ...props.to, params: { locale: route.params.locale, ...props.to.params } }
  }
  return props.to
})
</script>

<template>
<component :is="to ? RouterLink : 'div'" :to="destination" class="button-block">
  {{text}}
</component>
</template>

<style scoped lang="scss">
.button-block {
  display: block;
  font-weight: inherit;
  color: #1a1a1a;
  border-radius: 8px;
  background-color: #F9E1C7;
  width: fit-content;
  padding: 18px 40px;
  margin: 20px auto;
  text-transform: uppercase;
  text-align: center;
  transition:.8s;
  &:hover {
    cursor: pointer;
    background-color: #efc79b;
  }
}
</style>
