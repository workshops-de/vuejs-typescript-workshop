<template>
  <table>
    <BookListItem
      v-for="book in books"
      :key="book.isbn"
      v-bind="book"
      @read="readBook(book)"
    />
  </table>
</template>

<script>
import BookListItem from '@/components/BookListItem.vue';
import { createNamespacedHelpers } from 'vuex';

const {
  mapState,
  mapActions,
} = createNamespacedHelpers('books');

export default {
  name: 'BookList',
  components: {
    BookListItem,
  },
  computed: {
    ...mapState(['books']),
  },
  methods: {
    ...mapActions({
      setBooks: 'SET_BOOKS',
      getBooks: 'GET_BOOKS',
    }),
    readBook(book) {
      this.setBooks([
        ...this.books.map((bookEntry) => {
          if (bookEntry.isbn === book.isbn) {
            return {
              ...bookEntry,
              read: true,
            };
          }
          return bookEntry;
        }),
      ]);
    },
    async updateBooks() {
      await this.getBooks();
    },
  },
  created() {
    this.updateBooks();
  },
};
</script>

<style lang="scss">
  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;

    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #4caf50;
      color: white;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #ddd;
    }
  }
</style>
