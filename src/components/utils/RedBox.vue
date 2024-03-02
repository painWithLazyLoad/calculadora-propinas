<script setup lang="ts">
import { PropType } from 'vue'
import { parseCurrency } from '@/functions'
const props = defineProps({
  value: {
    type: Number as PropType<number | null>,
    default: null
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="container-red-box">
    <span class="title-red-box text-sm">
      {{ props.title }}
    </span>
    <span class="value-red-box text-xl">
      {{ parseCurrency(props.value) }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.container-red-box {
  min-width: 180px;
  color: $primary;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: right;
  .title-red-box {
    white-space: nowrap;
  }
  .value-red-box {
    background: $primary-light;
    border-radius: 8px;
    padding: 8px;
    font-weight: 800;
  }
}
</style>
