import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiCalculator,
  LaCogSolid,
  MdDarkmode,
  MdExittoapp,
  MdModeedit,
  PrWallet,
  BiCashStack,
  BiCreditCardFill,
  IoClose,
  RiPencilFill,
  GiConfirmed,
  CoDelete
} from 'oh-vue-icons/icons'

addIcons(
  BiCalculator,
  LaCogSolid,
  MdDarkmode,
  MdExittoapp,
  MdModeedit,
  PrWallet,
  BiCashStack,
  BiCreditCardFill,
  IoClose,
  RiPencilFill,
  GiConfirmed,
  CoDelete
)

createApp(App).component('Icon', OhVueIcon).use(router).mount('#app')
