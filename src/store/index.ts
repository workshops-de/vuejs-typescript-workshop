import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
  },
  mutations: {
    UPDATE_BOOKS(state, payload) {
      state.books = payload.books;
    },
  },
  actions: {
    SET_BOOKS({ commit }, payload) {
      commit('UPDATE_BOOKS', payload);
    },
  },
});
