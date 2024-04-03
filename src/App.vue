<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { searchMovies } from './state.js'


export default{
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      movies: [],
      errorMessage: ''
    };
  },
  methods: {
    async searchMovies(searchQuery) {
      this.errorMessage = '';

      if (searchQuery.trim() === '') {
        this.errorMessage = 'Inserisci il nome di un film da cercare.';
        return;
      }

      try {
        const { movies, errorMessage } = await searchMovies(searchQuery.trim());
        this.movies = movies;
        this.errorMessage = errorMessage;
      } catch (error) {
        console.error('Si è verificato un errore durante la ricerca dei film:', error);
        this.errorMessage = 'Si è verificato un errore durante la ricerca dei film. Si prega di riprovare più tardi.';
      }
    }
  }
};

</script>

<template>
  <AppHeader @search="searchMovies" />
  <AppMain :movies="movies" :errorMessage="errorMessage" />
  <AppFooter />
</template>

<style>
@import url('./style.css');
</style>
