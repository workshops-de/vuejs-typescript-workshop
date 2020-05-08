<template>
  <div>
    <h1>{{ book.title }}</h1>
    <ol>
      <li
        v-for="(value, key) in book"
        :key="key"
      >
        {{ key }}: {{ value }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  data() {
    return {
      book: {},
      isbn: null,
    };
  },
  methods: {
    async getBook() {
      const response = await fetch(`http://localhost:4730/books/${this.isbn}`);
      this.book = await response.json();
    },
    init(isbn) {
      this.isbn = isbn;
      this.getBook();
    },
  },
  created() {
    this.init(this.$route.params.isbn);
  },
  beforeRouteUpdate(to, _, next) {
    this.isbn = to.params.isbn;
    next();
  },
};
</script>

<style scoped>
  ol {
    list-style: none;
    text-align: left;
  }
</style>
