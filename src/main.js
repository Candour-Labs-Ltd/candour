import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import 'boxicons'
import router from './router'

Vue.use(Vuesax, {
  // options here
  colors: {
    primary: "rgb(0, 94, 255)",
    success: "rgb(23, 201, 100)",
    danger: "rgb(242, 19, 93)",
    warning: "rgb(255, 130, 0)",
    dark: "rgb(30, 32, 35)",
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
