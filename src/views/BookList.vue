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

export default {
  name: 'BookList',
  components: {
    BookListItem,
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  methods: {
    readBook(book) {
      this.$store.dispatch('SET_BOOKS', [
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
      await this.$store.dispatch('GET_BOOKS');
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
