import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import books from '@/store/modules/books';
import { RootState } from '@/store/interfaces';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    books,
  },
};

export default new Vuex.Store<RootState>(store);
