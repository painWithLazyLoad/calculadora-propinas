import { MeansPayment } from '.'

export type TipState = {
  model: number
  totalTip: number
  totalPaid: number
  remainingPayable: number
  divideBy: number
  tipForEach: number
  meanPayment: MeansPayment | null
  editTotalTip: boolean
  isOpenReceipt: boolean
}
