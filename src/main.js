import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import GobalConsts from "@/plugin/const-management";

Vue.use(GobalConsts);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
