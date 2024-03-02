<script setup lang="ts">
import RedBox from '@/components/utils/RedBox.vue'
const value: number = 5500000
</script>

<template>
  <div class="header">
    <h1 class="title">Pago de propinas</h1>
    <red-box :value="value" title="Efectivo en caja"></red-box>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: min-content;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
}
</style>
