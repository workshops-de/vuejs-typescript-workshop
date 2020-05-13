import { Module } from 'vuex';
import { RootState } from '@/store/interfaces';
import { BookState } from '@/store/modules/interfaces';
import actions from '@/store/modules/actions';
import mutations from '@/store/modules/mutations';

const books: Module<BookState, RootState> = {
  namespaced: true,
  state: {
    books: [],
  },
  mutations,
  actions,
};

export default books;
