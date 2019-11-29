// @ts-nocheck
// import "./style.css";
import Vue from "vue";
export default function test() {
  console.log("tstststs");
}
// Vue.config.productionTip = false;
new Vue({
  // render: h => h(App),
  data: {
    a: 1,
    b: "test"
  },
  created() {
    console.log("Vue created123!!");
  }
}).$mount("#app");
