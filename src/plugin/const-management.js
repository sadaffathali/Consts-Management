/* eslint-disable no-unused-vars */
import { FA_CONSTS } from "@/locales/fa";

let GobalConsts = {};

GobalConsts.install = function (Vue, options) {
  Vue.prototype.$c = (key) => {
    return FA_CONSTS[key];
  };
};

export default GobalConsts;
