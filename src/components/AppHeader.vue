<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        searchMovies() {
            this.$emit('search', this.searchQuery);
        }
    }
};
</script>

<template>
   <header class="header">
    <div class="container">
      <div class="logo">
        <h1>Movie Search</h1>
      </div>
      <div class="search">
        <div id="search-container">
          <input type="text" v-model="searchQuery" placeholder="Cerca un film...">
          <button @click="searchMovies">Cerca</button>
        </div>
      </div>
      <div class="spacer"></div>
    </div>
  </header>
</template>

<style>
@import url('/src/assets/_header.css');
</style>