<script>
export default {
    name: 'AppMain',
    props: {
        movies: Array,
        errorMessage: String
    }
};
</script>

<template>
   <main>
        <div class="movie-list">
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            <div v-else>
                <div v-for="movie in movies" :key="movie.id" class="movie">
                    <h2>{{ movie.title }}</h2>
                    <p>Titolo Originale: {{ movie.original_title }}</p>
                    <p>Lingua: {{ movie.original_language }}</p>
                    <p>Voto: {{ movie.vote_average }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
@import url('/src/assets/_main.css');
</style>