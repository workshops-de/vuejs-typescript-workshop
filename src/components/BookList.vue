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

const BOOKS = [
  {
    title: 'Design Patterns',
    isbn: '978-0-20163-361-0',
  },
  {
    title: 'REST und HTTP',
    isbn: '978-3-86490-120-1',
  },
  {
    title: 'Eloquent JavaScript',
    isbn: '978-1-59327-584-6',
  },
];

export default {
  name: 'BookList',
  components: {
    BookListItem,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    readBook(book) {
      const index = this.books.indexOf(book);
      this.books.splice(index, 1, {
        ...book,
        read: true,
      });
    },
  },
  created() {
    this.books = BOOKS;
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
