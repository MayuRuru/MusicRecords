import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("record-card", {
  props: ["image", "title"],
  template: `
  <div>
  <img width="100" :src="image" :alt="title"/>
  <h2>{{ title }}</h2>
  </div>`,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
