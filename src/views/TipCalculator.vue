<script setup lang="ts">
import HeaderComponent from '@/components/header/Header.vue'
import BodyComponent from '@/components/body/Body.vue'
</script>
<template>
  <div class="view">
    <header-component></header-component>
    <body-component></body-component>
  </div>
</template>

<style scoped lang="scss">
.view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
