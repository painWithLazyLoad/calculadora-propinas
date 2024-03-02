<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/Sidebar.vue'
import Modal from '@/components/utils/Modal.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <sidebar-component></sidebar-component>
    <router-view></router-view>
  </div>
  <modal></modal>
</template>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100dvh;
  display: flex;
}
</style>
