import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    darkMode: false,
  },
  getters: {},
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
  actions: {
    toggleDarkMode(context) {
      context.commit("toggleDarkMode");
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      key: "cookr",
      paths: ["darkMode"],
    }),
  ],
});
