<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { RouteIcon } from '@/types'

const route = useRoute()
const routeIcons = ref<RouteIcon[]>([
  {
    route: '/',
    icon: 'bi-calculator',
    title: 'Calculadora de propinas'
  }
])
</script>

<template>
  <div class="container-sidebar">
    <img src="/icons/softii.png" alt="Logo Softii" class="icon" />

    <div class="menu">
      <button
        v-for="routeIcon in routeIcons"
        :key="routeIcon.route"
        :title="routeIcon.title"
        :class="routeIcon.route === route.path ? 'active' : ''"
        type="button"
        class="menu-item"
      >
        <icon :name="routeIcon.icon" scale="1.3"></icon>
      </button>
    </div>
    <div class="tools">
      <button type="button">
        <icon name="md-darkmode" scale="1.3"></icon>
      </button>
      <button type="button">
        <icon name="la-cog-solid" scale="1.3"></icon>
      </button>
      <button type="button">
        <icon name="md-exittoapp" scale="1.3"></icon>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-sidebar {
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 4px;
  padding-bottom: 25px;
  .icon {
    width: 100%;
  }
  .menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: transform 200ms;
  }
  .menu-item {
    border-radius: 40px;
    padding: 8px;
    color: $secondary;
    display: flex;
    justify-content: center;
    &.active {
      color: $white;
      background: $primary;
    }
  }
  .tools {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: $secondary;
  }
}
</style>
