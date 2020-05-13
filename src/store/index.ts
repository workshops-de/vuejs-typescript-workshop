import Vue from 'vue';
import Vuex from 'vuex';
import books from '@/store/modules/books';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    books,
  },
});
