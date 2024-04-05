<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { searchMovies } from './movie.js';
import { searchSeries } from './serie.js';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      media: [],
      errorMessage: ''
    };
  },
  methods: {
    async searchMedia(searchQuery) {
      this.errorMessage = '';

      if (searchQuery.trim() === '') {
        this.errorMessage = 'Inserisci il nome di un film o di una serie TV da cercare.';
        return;
      }

      try {
        const movieResponse = await searchMovies(searchQuery.trim());
        const seriesResponse = await searchSeries(searchQuery.trim());

        this.media = [...movieResponse.movies, ...seriesResponse.series];
        this.errorMessage = movieResponse.errorMessage || seriesResponse.errorMessage || '';
      } catch (error) {
        console.error('Si è verificato un errore durante la ricerca:', error);
        this.errorMessage = 'Si è verificato un errore durante la ricerca. Si prega di riprovare più tardi.';
      }
    }
  }
};
</script>


<template>
  <body>
    <AppHeader @search="searchMedia" />
    <AppMain :media="media" :errorMessage="errorMessage" />
    <AppFooter />
  </body>
</template>

<style>
@import url('./style.css');
</style>
