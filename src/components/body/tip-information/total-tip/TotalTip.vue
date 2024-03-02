<script setup lang="ts">
import { tipState } from '@/composables'
import RedBox from '@/components/utils/RedBox.vue'
const onEditTotalTip = () => {
  tipState.model = tipState.totalTip
  tipState.editTotalTip = true
}
</script>

<template>
  <div class="total-tip">
    <red-box :value="tipState.totalTip" title="Total de propinas"></red-box>
    <button
      :class="tipState.editTotalTip ? 'edit' : ''"
      class="button-total-tip"
      @click="onEditTotalTip"
    >
      <icon name="ri-pencil-fill" scale="1.3"></icon>
    </button>
  </div>
</template>

<style scoped lang="scss">
.total-tip {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  .button-total-tip {
    color: $secondary;
    display: flex;
    height: 100%;
    align-items: center;
    &.edit {
      color: $warning;
    }
  }
}
</style>
