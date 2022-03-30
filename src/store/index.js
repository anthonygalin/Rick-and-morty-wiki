import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    locations: [],
    pageId: 1,
    locationPageId: 1,
    currentCharacter: "",
    currentLocation: "",
    maxPage: null,
    maxLocationPage: null,
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    currentPage(state) {
      return state.pageId;
    },
    currentLocationPage(state) {
      return state.locationPageId;
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
      state.maxLocationPage = locations.info.pages;
    },
    setNewPage(state, newPage) {
      state.pageId = newPage;
    },
    setNewLocationPage(state, newPage) {
      state.locationPageId = newPage;
    },
    setFindedCharacter(state, character) {
      state.currentCharacter = character;
    },
    setFindedLocation(state, location) {
      state.currentLocation = location;
    },
  },
  actions: {
    async getCharacters({ state, commit }) {
      const characters = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${state.pageId}&name=${state.currentCharacter}`
      );
      commit("setCharacters", characters.data);
    },
    async getLocations({ state, commit }) {
      const locations = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${state.locationPageId}&name=${state.currentLocation}`
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
    nextLocationPage({ state, commit }) {
      let newPage = state.locationPageId;
      console.log(state.maxLocationPage);
      if (newPage < state.maxLocationPage) {
        ++newPage;
      }
      commit("setNewLocationPage", newPage);
    },
    prevPage({ state, commit }) {
      let newPage = state.pageId;
      if (newPage > 1) {
        --newPage;
      }
      commit("setNewPage", newPage);
    },
    prevLocationPage({ state, commit }) {
      let newPage = state.locationPageId;
      if (newPage > 1) {
        --newPage;
      }
      commit("setNewLocationPage", newPage);
    },
    searchCharacter({ state, commit }) {
      if (state.pageId === 1) {
        let character = state.currentCharacter;
        commit("setFindedCharacter", character);
      }
      state.pageId = 1;
    },
    searchLocation({ state, commit }) {
      if (state.locationPageId === 1) {
        let location = state.currentLocation;
        commit("setFindedLocation", location);
      }
      state.locationPageId = 1;
    },
  },
  modules: {},
});
