<script setup lang="ts">
import { parseCurrency } from '@/functions'
import { paymentState, tipState } from '@/composables'
import { TypePaid } from '@/types'
import Card from '@/components/utils/Card.vue'
const icons: TypePaid = {
  cash: 'bi-cash-stack',
  'credit-card': 'bi-credit-card-fill'
}
const onRemovePayment = (index: number) => {
  tipState.totalPaid = tipState.totalPaid
    ? tipState.totalPaid - paymentState[index].value
    : 0
  tipState.remainingPayable = tipState.remainingPayable
    ? tipState.remainingPayable + paymentState[index].value
    : 0
  paymentState.splice(index, 1)
}
</script>

<template>
  <div class="payments">
    <span class="subtitle">Pagos</span>
    <div class="container-payments">
      <card
        v-for="(payment, index) in paymentState"
        :key="index"
        class="card-payments"
      >
        <div class="container-card-payments">
          <icon
            :name="icons[payment.type as keyof TypePaid]"
            scale="1.3"
          ></icon>
          <span>{{ payment.title }}</span>
        </div>
        <div class="container-card-payments">
          <span>{{ parseCurrency(payment.value) }}</span>
          <icon
            name="io-close"
            size="1.3"
            class="icon-close"
            @click="onRemovePayment(index)"
          ></icon>
        </div>
      </card>
      <card v-if="paymentState.length === 0" class="card-payments">
        Sin pagos
      </card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.payments {
  width: 33.33%;
  height: 100%;
  padding-right: 12px;
  .container-payments {
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    gap: 12px;
    .card-payments {
      padding: 15px;
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      .container-card-payments {
        display: flex;
        align-items: center;
        gap: 8px;
        width: min-content;
      }
    }
  }
}
.icon-close {
  color: $primary;
  cursor: pointer;
}
</style>
