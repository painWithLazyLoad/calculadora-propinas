<script setup lang="ts">
import { parseCurrency } from '@/functions'
import { tipState, paymentState } from '@/composables'
import ButtonComponent from '@/components/utils/Button.vue'

const onPaying = () => {
  if (!tipState.meanPayment?.id || !tipState.model) return
  if (tipState.remainingPayable !== 0 && tipState.model > tipState.totalPaid)
    return
  paymentState.push({
    createdAt: new Date().toString(),
    title: tipState.meanPayment.title,
    type: tipState.meanPayment.type,
    value: tipState.model
  })
  tipState.totalPaid = tipState.totalPaid + tipState.model
  tipState.remainingPayable = tipState.totalTip - tipState.totalPaid
  tipState.model = 0
  tipState.meanPayment = {
    id: null,
    type: '',
    bank: '',
    icon: '',
    title: ''
  }
}
const handleReceipt = () => {
  tipState.isOpenReceipt = true
}
</script>

<template>
  <div class="total">
    <div class="total-item">
      <div class="item-paid">
        <span class="text-lg">Total pagado</span>
        <span class="text-lg">
          {{ parseCurrency(tipState.totalPaid) }}
        </span>
      </div>
      <div class="item-to-pay">
        <span class="text-lg">Restante por pagar</span>
        <span class="text-lg">
          {{ parseCurrency(tipState.remainingPayable) }}
        </span>
      </div>
    </div>
    <div class="total-item">
      <button-component
        v-if="tipState.remainingPayable === 0 && paymentState.length > 0"
        class="text-lg"
        @click="handleReceipt"
      >
        Visualizar pago
      </button-component>
      <button-component v-else class="text-lg" @click="onPaying">
        Pagar propinas
      </button-component>
    </div>
  </div>
</template>

<style scoped lang="scss">
.total {
  width: 60%;
  display: flex;
  gap: 16px;
  .total-item {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
  .item-to-pay {
    display: flex;
    justify-content: space-between;
  }
  .item-paid {
    display: flex;
    justify-content: space-between;
    color: $primary;
  }
}
</style>
