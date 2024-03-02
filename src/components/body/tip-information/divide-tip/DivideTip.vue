<script setup lang="ts">
import { watch } from 'vue'
import { parseCurrency } from '@/functions'
import { tipState } from '@/composables'
import InputComponent from '@/components/utils/Input.vue'
watch(
  () => tipState.divideBy,
  () => {
    if (tipState?.totalTip && tipState?.totalTip !== 0) {
      if (tipState.divideBy && tipState.divideBy !== 0) {
        tipState.tipForEach = Math.round(tipState.totalTip / tipState.divideBy)
      } else {
        tipState.tipForEach = 0
        tipState.divideBy = 1
      }
    }
  }
)
</script>

<template>
  <div class="divide-tip container-divide text-base">
    <span class="subtitle">¿Entre cúantos quieres dividir las Propinas?</span>
    <div class="container-divide-tip">
      <input-component v-model="tipState.divideBy" type="number" />
      <span class="text-divide-tip text-lg">
        {{ parseCurrency(tipState.tipForEach) }} x Persona
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.divide-tip {
  display: flex;
  flex-direction: column;
  gap: 12px;
  .container-divide-tip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
  }
  .text-divide-tip {
    white-space: nowrap;
    color: $primary;
  }
}
</style>
