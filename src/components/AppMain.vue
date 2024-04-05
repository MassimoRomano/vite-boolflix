<script>
export default {
    name: 'AppMain',
    props: {
        media: Array,
        errorMessage: String,
    },
    methods: {
        getImageUrl(posterPath) {
            return posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : 'placeholder.jpg';
        },
        getStarRating(vote) {
            const roundedVote = Math.ceil(vote / 2); 
            const stars = [];
            
            for (let i = 0; i < 5; i++) {
                if (i < roundedVote) {
                    stars.push('<i class="fa-solid fa-star"></i>'); // Stella piena
                } else if (i === roundedVote && vote % 2 !== 0) {
                    stars.push('<i class="fa-solid fa-star-half-stroke"></i>'); // Mezza stella
                } else {
                    stars.push('<i class="fa-regular fa-star"></i>'); // Stella vuota
                }
            }
            
            return stars;
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
                        <img style="width: 30px;" :src="item.flag" :alt="item.original_language" class="flag">
                        <h2>{{ item.title }}</h2>
                        <p>Titolo Originale: {{ item.original_title || item.original_name }}</p>
                        <p>Lingua: {{ item.original_language }}</p>
                        <div class="star-rating">
                            <span v-html="getStarRating(item.vote_average).join('')"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
@import url('/src/assets/_main.css');
</style>