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
    maxPage(state) {
      return state.maxPage;
    },
    maxLocationPage(state) {
      return state.maxLocationPage;
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
    //Call rick and morty api and get characters.
    async getCharacters({ state, commit }) {
      const characters = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${state.pageId}&name=${state.currentCharacter}`
      );
      commit("setCharacters", characters.data);
    },
    //Call rick and morty api and get characters.
    async getLocations({ state, commit }) {
      const locations = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${state.locationPageId}&name=${state.currentLocation}`
      );
      commit("setLocations", locations.data);
    },
    //Character page select logic
    pageChange({ state, commit }, page) {
      let newPage = state.pageId;
      if (newPage <= state.maxPage) {
        newPage = page;
      }
      commit("setNewPage", newPage);
    },
    //Location pages buttons select logic
    locationPageChange({ state, commit }, page) {
      let newLocationPage = state.locationPageId;
      if (newLocationPage <= state.maxLocationPage) {
        newLocationPage = page;
      }
      commit("setNewLocationPage", newLocationPage);
    },
    //Next paginator button character page logic
    nextPage({ state, commit }) {
      let newPage = state.pageId;
      if (newPage < state.maxPage) {
        ++newPage;
      }
      commit("setNewPage", newPage);
    },
    //Next paginator location page logic
    nextLocationPage({ state, commit }) {
      let newPage = state.locationPageId;
      console.log(state.maxLocationPage);
      if (newPage < state.maxLocationPage) {
        ++newPage;
      }
      commit("setNewLocationPage", newPage);
    },
    //prev paginator character page logic
    prevPage({ state, commit }) {
      let newPage = state.pageId;
      if (newPage > 1) {
        --newPage;
      }
      commit("setNewPage", newPage);
    },
    //prev paginator location page logic
    prevLocationPage({ state, commit }) {
      let newPage = state.locationPageId;
      if (newPage > 1) {
        --newPage;
      }
      commit("setNewLocationPage", newPage);
    },
    //search character logic
    searchCharacter({ state, commit }) {
      if (state.pageId === 1) {
        let character = state.currentCharacter;
        commit("setFindedCharacter", character);
      }
      state.pageId = 1;
    },
    //search location logic
    searchLocation({ state, commit }) {
      if (state.locationPageId === 1) {
        let location = state.currentLocation;
        commit("setFindedLocation", location);
      }
      state.locationPageId = 1;
    },
  },
});
