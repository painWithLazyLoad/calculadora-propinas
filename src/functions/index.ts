const parseCurrency = (value: number | null): string =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(value ?? 0)
export { parseCurrency }
