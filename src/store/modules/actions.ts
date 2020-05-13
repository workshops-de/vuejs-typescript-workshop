import { ActionTree } from 'vuex';
import { Book, BookState } from '@/store/modules/interfaces';
import { RootState } from '@/store/interfaces';
import { getBooks } from '@/api/books';

const actions: ActionTree<BookState, RootState> = {
  SET_BOOKS({ commit }, books: Book[]) {
    commit('UPDATE_BOOKS', books);
  },
  async GET_BOOKS({ commit }): Promise<void> {
    const books: Book[] = await getBooks();
    commit('UPDATE_BOOKS', books);
  },
};

export default actions;
