<script>
export default {
    name: 'AppMain',
    props: {
        media: Array,
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
                    <div v-for="(item, index) in media" :key="index" class="movie">
                        <img :src="getImageUrl(item.poster_path)" :alt="item.title">
                        <img :src="item.flag" :alt="item.original_language" class="flag">
                        <h2>{{ item.title }}</h2>
                        <p>Titolo Originale: {{ item.original_title || item.original_name }}</p>
                        <p>Lingua: {{ item.original_language }}</p>
                        <p>Voto: {{ item.vote_average }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
@import url('/src/assets/_main.css');
</style>