import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    locations: [],
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    locations(state) {
      return state.locations;
    },
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setLocations(state, locations) {
      state.locations = locations;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      const characters = await axios.get(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      commit("setCharacters", characters.data);
    },
    async getLocations({ commit }) {
      const locations = await axios.get(
        "https://rickandmortyapi.com/api/location?page=1"
      );
      commit("setLocations", locations.data);
    },
  },
  modules: {},
});
