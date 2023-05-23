import { createStore } from "vuex";
import { vuexLocal } from "@/plugins/persist";

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
    setDarkMode(state, payload) {
      state.darkMode = payload;
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin],
});
