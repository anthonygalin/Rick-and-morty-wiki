import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    locations: [],
    pageId: 1,
    maxPage: null,
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    currentPage(state) {
      return state.pageId;
    },
    locations(state) {
      return state.locations;
    },
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
      state.maxPage = characters.info.pages;
    },
    setLocations(state, locations) {
      state.locations = locations;
    },
    setNewPage(state, newPage) {
      state.pageId = newPage;
    },
  },
  actions: {
    async getCharacters({ state, commit }) {
      const characters = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${state.pageId}`
      );
      commit("setCharacters", characters.data);
    },
    async getLocations({ commit }) {
      const locations = await axios.get(
        `https://rickandmortyapi.com/api/location?page=1`
      );
      commit("setLocations", locations.data);
    },
    nextPage({ state, commit }) {
      let newPage = state.pageId;
      if (newPage < state.maxPage) {
        ++newPage;
      }
      commit("setNewPage", newPage);
    },
    prevPage({ state, commit }) {
      let newPage = state.pageId;
      if (newPage > 1) {
        --newPage;
      }
      commit("setNewPage", newPage);
    },
  },
  modules: {},
});
