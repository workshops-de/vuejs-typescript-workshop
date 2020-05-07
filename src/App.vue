<template>
  <div id="app">
    <AppNavigation />
    <BookList />
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';
import BookList from '@/components/BookList.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
    BookList,
  },
};
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
