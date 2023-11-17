<template>
    <main class="p-5">
        <section class=" text-white">
            <h2 class=" p-5 pt-2">MOVIES</h2>
            <div class="d-flex flex-row flex-wrap justify-content-center">
                <div class=" w-auto flex-grow-0 " v-for="movie in store.movieList" :key="movie">
                    <OtherCard class="col-3 col-md-4 col-lg-12 debugCol pb-5" :title="movie.title"
                        :original_title="movie.original_title" :original_language="movie.original_language"
                        :vote_average="movie.vote_average" :poster_path="movie.poster_path" :overview="movie.overview"
                        :id="movie.id" :movie="movie" isMovie="true" />

                    <!-- <CardComponent class="col-3 col-md-4 col-lg-12 debugCol pb-5" :title="movie.title"
                        :original_title="movie.original_title" :original_language="movie.original_language"
                        :vote_average="movie.vote_average" :poster_path="movie.poster_path" />  -->
                </div>
            </div>
        </section>

        <section class=" text-white">
            <h2 class="p-5">TV</h2>
            <div class="row">
                <div class="d-flex flex-row flex-wrap justify-content-center">
                    <div class=" w-auto flex-grow-0 " v-for="serie in store.seriesList" :key="serie">
                        <OtherCard class="col-3 col-md-4 col-lg-12 debugCol pb-5" :title="serie.name"
                            :original_title="serie.original_title" :original_language="serie.original_language"
                            :vote_average="serie.vote_average" :poster_path="serie.poster_path" :overview="serie.overview"
                            :id="serie.id" :movie="serie" isMovie="false" />
                        <!-- <OtherCard class="col-3 col-md-4 col-lg-12 debugCol pb-5" :title="serie.name"
                        :original_title="serie.original_title" :original_language="serie.original_language"
                        :vote_average="serie.vote_average" :poster_path="serie.poster_path"/> -->


                        <!-- <NewCardComponent :title="serie.name" /> -->
                        <!-- <CardComponent class="col-3 col-md-4 col-lg-12 debugCol " :title="serie.name"
                            :original_title="serie.original_title" :original_language="serie.original_language"
                            :vote_average="serie.vote_average" :poster_path="serie.poster_path" /> -->
                    </div>
                </div>
            </div>

        </section>
    </main>
</template>

<script>
import { store } from '../data/store'
import OtherCard from './OtherCard.vue';

export default {
    name: "MainComponent",
    data() {
        return {
            store,
        };
    },
    methods: {

    },
    components: { OtherCard }
}
</script>

<style lang="scss" scoped></style>