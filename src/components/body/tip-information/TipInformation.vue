<script setup lang="ts">
import TotalTip from '@/components/body/tip-information/total-tip/TotalTip.vue'
import DivideTip from '@/components/body/tip-information/divide-tip/DivideTip.vue'
import MeansPayment from '@/components/body/tip-information/means-payment/MeansPayment.vue'
</script>

<template>
  <div class="tip-information">
    <total-tip></total-tip>
    <divide-tip></divide-tip>
    <means-payment></means-payment>
  </div>
</template>

<style scoped lang="scss">
.tip-information {
  width: 33.33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-left: 12px;
}
</style>
