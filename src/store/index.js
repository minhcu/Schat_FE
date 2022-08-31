import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import chat from "./modules/chat";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    default: {
      userImage:
        "https://secure.gravatar.com/avatar/c71c8e39ab1b89c4212707ce0c1ed9f3",
    },
  },
  getters: {
    defaultAvatar: (state) => {
      return state.default.userImage;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    chat,
  },
});
