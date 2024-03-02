import { reactive } from 'vue'
import { TipState } from '@/types'
export const tipState = reactive<TipState>({
  model: 0,
  totalTip: 0,
  totalPaid: 0,
  remainingPayable: 0,
  divideBy: 1,
  tipForEach: 0,
  meanPayment: {
    id: null,
    type: '',
    bank: '',
    icon: '',
    title: ''
  },
  editTotalTip: false,
  isOpenReceipt: false
})
