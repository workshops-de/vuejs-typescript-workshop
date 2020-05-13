import { MutationTree } from 'vuex';
import { Book, BookState } from '@/store/modules/interfaces';

const mutations: MutationTree<BookState> = {
  UPDATE_BOOKS(state, books: Book[]) {
    state.books = books;
  },
};

export default mutations;
