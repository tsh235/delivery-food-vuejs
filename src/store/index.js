import {goodsArr, restsArr} from '@/constants/const.js';
import { reactive } from 'vue';

export const store = reactive({
  isOpen: false,
  toggleModal(val) {
    this.isOpen = val
  },
  rests: restsArr,
  goods: goodsArr,
})