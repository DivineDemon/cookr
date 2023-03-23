import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    darkMode: false,
  },
  getters: {
    getDarkMode(state) {
      return state.darkMode;
    },
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      key: "cookr",
      paths: ["darkMode"],
    }),
  ],
});
