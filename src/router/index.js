import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/login/index.vue";
import ForgetPassword from "../views/auth/forgetPassword/index.vue";
import Chat from "../views/chat/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // If (!=auth) ->  /login
    // else -> /chat
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgetpassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
