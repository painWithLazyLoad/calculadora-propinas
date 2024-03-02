export type NumberPad = {
  value: string | number | null
  onPress: (a: NumberPad) => void
  isCustom?: boolean | null | undefined
  component?: object | null | undefined
  props?: object | null | undefined
  text: string
}
