import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/main.css";
// import "dotenv/config";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("http://localhost:4040"),
    vuex: {
      store,
    },
  })
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
