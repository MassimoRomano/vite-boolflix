<script>
export default {
    name: 'AppMain',
    props: {
        movies: Array,
        errorMessage: String
    },
    methods: {
        getImageUrl(posterPath) {
            return posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : 'placeholder.jpg';
        }
    }
};
</script>

<template>
    <main>
        <div class="movie-list">
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            <div v-else>
                <div class="d-wrap">
                    <div v-for="movie in movies" :key="movie.id" class="movie">
                        <img :src="getImageUrl(movie.poster_path)" :alt="movie.title">
                        <h2>{{ movie.title }}</h2>
                        <p>Titolo Originale: {{ movie.original_title }}</p>
                        <p>Lingua: {{ movie.original_language }}</p>
                        <p>Voto: {{ movie.vote_average }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
@import url('/src/assets/_main.css');
</style>