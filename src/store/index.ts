import Vue from 'vue';
import Vuex from 'vuex';

import { getBooks } from '../api/books';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
  },
  mutations: {
    UPDATE_BOOKS(state, books) {
      state.books = books;
    },
  },
  actions: {
    SET_BOOKS({ commit }, books) {
      commit('UPDATE_BOOKS', books);
    },
    async GET_BOOKS({ commit }) {
      const books = await getBooks();
      commit('UPDATE_BOOKS', books);
    },
  },
});
