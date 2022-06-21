const state = JSON.parse(localStorage.getItem("user"));

const mutations = {
  fetchUserData(state, userData) {
    Object.assign(state, userData);
  },
  deleteUserData(state) {
    localStorage.removeItem("user");
    for (var key in state) {
      delete state[key];
    }
  },
};

const actions = {
  fetchUserData(context, userData) {
    context.commit("fetchUserData", userData);
  },
  deleteUserData(context) {
    context.commit("deleteUserData");
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
