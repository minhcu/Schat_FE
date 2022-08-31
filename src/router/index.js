import Vue from "vue";
import VueRouter from "vue-router";
import loginView from "../views/auth/loginView.vue";
import forgetPassView from "../views/auth/forgetPassView.vue";
import chatView from "../views/chat/chatView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // If (!=auth) ->  /login
    // else -> /chat
    redirect: "/login",
  },
  {
    path: "/chat/:id/",
    name: "chatView",
    component: chatView,
  },
  {
    path: "/login",
    name: "loginView",
    component: loginView,
    meta: {
      layout: "authLayout",
    },
  },
  {
    path: "/forgetpassword",
    name: "forgetPassView",
    component: forgetPassView,
  },
  {
    path: "/chat",
    component: chatView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
