<script setup lang="ts">
import TipInformation from '@/components/body/tip-information/TipInformation.vue'
import Calculator from '@/components/body/calculator/Calculator.vue'
import Payments from '@/components/body/payments/Payments.vue'
import Total from '@/components/body/total/Total.vue'
</script>

<template>
  <div class="body">
    <div class="content-body">
      <tip-information></tip-information>
      <calculator></calculator>
      <payments></payments>
    </div>
    <div class="footer-body">
      <total></total>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .content-body {
    width: 100%;
    height: 0;
    display: flex;
    flex-grow: 1;
    overflow-y: auto;
    padding-top: 15px;
    flex-wrap: nowrap;
    gap: 32px;
  }
  .footer-body {
    width: 100%;
    padding: 12px 16px;
    height: min-content;
    display: flex;
    justify-content: center;
  }
}
</style>
