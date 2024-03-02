<script setup lang="ts">
import { ref, nextTick, shallowRef } from 'vue'
import { OhVueIcon } from 'oh-vue-icons'
import { tipState } from '@/composables'
import { NumberPad } from '@/types'
const onPress = async (data: NumberPad) => {
  const value = tipState.model?.toString() ?? ''
  tipState.model = parseInt(value?.trim() + data.value)
  await nextTick()
  calculatorInput.value?.focus()
}
const onFinish = () => {
  if (!tipState.model) return
  if (tipState.editTotalTip) {
    tipState.totalTip = tipState.model
    tipState.editTotalTip = false
    tipState.model = 0
  }
}
const onDelete = () => {
  const value = tipState.model.toString().trim()
  if (value.length > 1) {
    tipState.model = parseInt(value.slice(0, -1))
  } else {
    tipState.model = 0
  }
}
const calculatorInput = ref<HTMLInputElement>()
const numbersPad = ref<NumberPad[]>([
  {
    value: 1,
    onPress,
    text: '1'
  },
  {
    value: 2,
    onPress,
    text: '2'
  },
  {
    value: 3,
    onPress,
    text: '3'
  },
  {
    value: 4,
    onPress,
    text: '4'
  },
  {
    value: 5,
    onPress,
    text: '5'
  },
  {
    value: 6,
    onPress,
    text: '6'
  },
  {
    value: 7,
    onPress,
    text: '7'
  },
  {
    value: 8,
    onPress,
    text: '8'
  },
  {
    value: 9,
    onPress,
    text: '9'
  },
  {
    value: '00',
    onPress,
    text: '00'
  },
  {
    value: 0,
    onPress,
    text: '0'
  },
  {
    value: 'delete',
    onPress: onFinish,
    text: '',
    isCustom: true,
    component: shallowRef(OhVueIcon),
    props: {
      name: 'gi-confirmed',
      scale: 1.3
    }
  }
])
</script>
<template>
  <div class="calculator">
    <div class="calculator-container">
      <div class="calculator-input-container">
        <input
          id="calculator-input"
          ref="calculatorInput"
          v-model="tipState.model"
          type="number"
        />
        <icon
          name="co-delete"
          scale="1.3"
          class="calculator-icon-delete"
          @click="onDelete"
        ></icon>
      </div>
      <div class="calculator-numbers-pad">
        <div
          v-for="number in numbersPad"
          :key="number.text"
          class="calculator-number"
          @click="number.onPress(number)"
        >
          <div v-if="number.isCustom">
            <component :is="number.component" v-bind="number.props"></component>
          </div>
          <div v-else class="text-2xl number">
            {{ number.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator {
  width: 33%;
  height: 100%;

  .calculator-container {
    width: 100%;
    height: min-content;
    padding: 20px;
    background: $light;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .calculator-input-container {
      display: flex;
      align-items: center;
      position: relative;
      .calculator-icon-delete {
        position: absolute;
        cursor: pointer;
        right: 0;
      }
    }

    #calculator-input {
      appearance: none;
      border-style: none;
      outline: none;
      border-bottom: 1px #000 solid;
      background: #ffffff00;
      padding: 8px 20px;
      text-align: right;
      font-size: 20px;
      width: 100%;
    }
    .calculator-numbers-pad {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-flow: row;
      gap: 8px;

      .calculator-number {
        width: 100%;
        height: 100%;
        background-color: $white;
        border-radius: 18px;
        padding: 20px 10px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        transition: all 300ms ease-in-out;
        &:hover {
          background-color: $light-thin;
        }
        .number {
          text-align: center;
        }
        &:last-child {
          background: $success;
          color: $white;
        }
      }
    }
  }
}
</style>
