const state = {
  user: {},
};

const mutations = {
  setUserData(state, userData) {
    state.user = { ...userData };
  },
  deleteUserData(state) {
    localStorage.removeItem("user");
    for (var key in state) {
      delete state[key];
    }
  },
};

const actions = {
  async fetchUserData({ commit }, userData) {
    await commit("setUserData", userData);
  },
  deleteUserData(context) {
    context.commit("deleteUserData");
  },
};

const getters = {
  userName: (state) => {
    return state.user.name;
  },
  userEmail: (state) => {
    return state.user.email;
  },
  accessToken: (state) => {
    return state.user.accessToken;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
