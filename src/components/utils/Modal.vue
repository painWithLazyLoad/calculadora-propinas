<script setup lang="ts">
import { tipState, paymentState } from '@/composables'
import { TypePaid } from '@/types'
const closeModal = () => {
  tipState.isOpenReceipt = false
}
const typePaid: TypePaid = {
  cash: 'Efectivo',
  'credit-card': 'Tarjeta de credito/debito'
}
</script>

<template>
  <div
    v-if="tipState.isOpenReceipt"
    class="modal-background"
    @click.self="closeModal"
  >
    <div class="modal">
      <div
        v-for="payment in paymentState"
        :key="payment.type"
        class="container-payment"
      >
        <span class="subtitle">Titulo: {{ payment.title }} </span>
        <span class="subtitle"
          >Valor de la transaccion: {{ payment.value }}</span
        >
        <span class="subtitle">Fecha:{{ payment.createdAt }}</span>
        <span class="subtitle"
          >Tipo de pago: {{ typePaid[payment.type as keyof TypePaid] }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-background {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000000c4;
  .modal {
    background: $white;
    padding: 12px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    min-height: 500px;
    gap: 12px;
  }
  .container-payment {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px;
  }
}
</style>
