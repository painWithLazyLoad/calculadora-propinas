<script setup lang="ts">
import { ref } from 'vue'
import { tipState } from '@/composables'
import { MeansPayment } from '@/types/MeansPaymentTypes'
import Card from '@/components/utils/Card.vue'
const meansPayment = ref<MeansPayment[]>([
  {
    id: 1,
    type: 'cash',
    bank: 'cash',
    icon: 'bi-cash-stack',
    title: 'Efectivo'
  },
  {
    id: 12345,
    type: 'credit-card',
    icon: 'bi-credit-card-fill',
    bank: 'BBVA',
    title: 'BBVA 1234'
  },
  {
    id: 1234,
    type: 'credit-card',
    icon: 'bi-credit-card-fill',
    bank: 'Bancolombia',
    title: 'Bancolombia 1234'
  }
])
const onSelectPayment = (meanPayment: MeansPayment) => {
  tipState.meanPayment = meanPayment
}
</script>

<template>
  <div class="means-payment">
    <div class="text-means-payment">
      <icon name="pr-wallet" scale="1.3"></icon>
      <span class="subtitle">Elige el metodo de pago</span>
    </div>
    <div class="grid-means-payment">
      <card
        v-for="meanPay in meansPayment"
        :key="meanPay.type"
        :class="meanPay.id === tipState.meanPayment?.id ? 'active' : ''"
        class="item-means-payment"
        @click="onSelectPayment(meanPay)"
      >
        <icon :name="meanPay.icon" scale="1.3"></icon>
        <span>{{ meanPay.title }}</span>
      </card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.means-payment {
  display: flex;
  flex-direction: column;
  gap: 12px;
  .text-means-payment {
    display: flex;
    gap: 8px;
  }
  .grid-means-payment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    gap: 8px;
  }
  .item-means-payment {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
    padding: 30px 0;
    &.active {
      background: $primary;
      color: $white;
    }
  }
}
</style>
