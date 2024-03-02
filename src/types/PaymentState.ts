export type PaymentState = {
  type: 'cash' | 'credit-card' | '' | string
  value: number
  title: string
  createdAt: string | null
}
