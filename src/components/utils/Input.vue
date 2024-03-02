<script setup lang="ts">
import { PropType } from 'vue'
const emit = defineEmits(['update:modelValue', 'focus'])
const props = defineProps({
  modelValue: {
    type: Number,
    default: null,
    required: true
  },
  type: {
    type: String as PropType<'text' | 'number' | 'date'>,
    default: 'text'
  }
})
/**
 * Functions
 */
const onInput = (payload: Event) => {
  const target = payload.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
const onEmitFocus = (payload: FocusEvent) => {
  emit('focus', payload)
}
</script>

<template>
  <input
    :value="props.modelValue"
    :type="props.type"
    :min="0"
    class="input"
    @input="onInput"
    @focus="onEmitFocus"
  />
</template>

<style scoped lang="scss">
.input {
  appearance: none;
  border: 1px solid #000;
  padding: 8px 12px;
  border-radius: 15px;
  outline: none;
}
</style>
