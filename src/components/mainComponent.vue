<template>
    <main class=" ps-1 overflow-x-hidden ">

        <MidComponent />

        <div class="my-bg-shade"></div>

        <section class=" text-white">
            <h2 class=" p-5 pt-2">MOVIES</h2>

            <div class="d-flex flex-row align-items-center w-100">
                <div class="scroll-btn d-flex flex-column justify-content-center p-3"
                    @click="scrollCarosello(-1), stopNextScroll()">
                    <i class="fa-solid fa-angle-left" style="color: #ffffff;"></i>
                </div>
                <div class="d-flex flex-row flex-nowrap   overflow-x-scroll carousel-container" ref="caroselloContainerTop">
                    <div class=" w-auto flex-grow-0 " v-for="movie in store.movieList" :key="movie">
                        <OtherCard class=" " v-if="filterGenre(movie.genre_ids[1])" :title="movie.title"
                            :original_title="movie.original_title" :original_language="movie.original_language"
                            :backdrop_path="movie.backdrop_path" :vote_average="movie.vote_average"
                            :poster_path="movie.poster_path" :overview="movie.overview" :id="movie.id"
                            :isMovie="trueReturner" :genre_ids="parseInt(movie.genre_ids[1])"
                            :genre_name="movie.genre_ids[0]" />
                    </div>
                </div>
                <div class="scroll-btn d-flex flex-column justify-content-center p-3"
                    @click="scrollCarosello(1), stopNextScroll()">
                    <i class="fa-solid fa-angle-right" style="color: #ffffff;"></i>
                </div>
            </div>

        </section>

        <section class=" text-white ">
            <h2 class="p-5">TV</h2>
            <div class="d-flex flex-row align-items-center w-100">
                <div class="scroll-btn d-flex flex-column justify-content-center p-3"
                    @click="scrollCarosello(-1), stopNextScroll()">
                    <i class="fa-solid fa-angle-left" style="color: #ffffff;"></i>
                </div>
                <div class="d-flex flex-row flex-nowrap   overflow-x-scroll carousel-container" ref="caroselloContainerBot">
                    <div class=" w-auto flex-grow-0 " v-for="serie in store.seriesList" :key="serie">
                        <OtherCard class="" v-if="filterGenre(serie.genre_ids[1])" :title="serie.name"
                            :original_title="serie.original_title" :original_language="serie.original_language"
                            :vote_average="serie.vote_average" :poster_path="serie.poster_path" :overview="serie.overview"
                            :id="serie.id" :isMovie="!trueReturner" :genre_ids="parseInt(serie.genre_ids[1])"
                            :genre_name="serie.genre_ids[0]" :backdrop_path="serie.backdrop_path" />
                    </div>
                </div>
                <div class="scroll-btn d-flex flex-column justify-content-center p-3"
                    @click="scrollCarosello(1), stopNextScroll()">
                    <i class="fa-solid fa-angle-right" style="color: #ffffff;"></i>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { store } from '../data/store'
import OtherCard from './OtherCard.vue';
import MidComponent from './MidComponent.vue'
export default {
    name: "MainComponent",
    data() {
        return {
            store,
            trueReturner: true,
            clickedBtn: false,

        };
    },
    methods: {
        filterGenre(id) {
            let genreSelected = store.filteredGenres;
            if (genreSelected === '' || id === genreSelected) {
                return true;
            } else {
                return false;
            }
        },
        scrollCarosello(direction) {
            const caroselloContainerTop = this.$refs.caroselloContainerTop;
            const caroselloContainerBot = this.$refs.caroselloContainerBot;

            const scrollAmount = 1000;
            caroselloContainerTop.scrollLeft += direction * scrollAmount;
            caroselloContainerBot.scrollLeft += direction * scrollAmount;


        },
        stopNextScroll() {
            //stop next btn click
            this.clickedBtn = true
        }
    },
    created() {
        let counter = 0
        const delay = setInterval(() => {
            if (counter < 5 && !this.clickedBtn) {
                this.scrollCarosello(1)
                counter++;
            } else {
                clearInterval(delay)
            }
        }, 3000);
    },
    components: { OtherCard, MidComponent }
}
</script>

<style lang="scss" scoped>
.scroll-btn {
    width: 80px;

    height: 200px;
}

.carousel-container {
    scroll-behavior: smooth;
}

.my-bg-shade {
    height: 50px;
    background-image: linear-gradient(to bottom, transparent, #434343);
    transform: translate(0, -100%);
    z-index: 2000;
}
</style>