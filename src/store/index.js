import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  getters: {
    characters(state) {
      return state.characters;
    },
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      const characters = await axios.get(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      commit("setCharacters", characters.data);
    },
  },
  modules: {},
});
