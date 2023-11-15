<template>
    <main class="p-5">
        <section class=" text-white">
            <h2 class=" p-5 pt-2">MOVIES</h2>
            <div class="d-flex flex-row flex-wrap justify-content-start">
                <div class=" w-auto flex-grow-1 p-2" v-for="(movie, index) in store.movieList">
                    <CardComponent class="col-3 col-md-4 col-lg-12 debugCol pb-5" key="movie" :title="movie.title"
                        :original_title="movie.original_title" :original_language="movie.original_language"
                        :vote_average="movie.vote_average" :poster_path="movie.poster_path" />
                </div>
            </div>
        </section>

        <section class=" text-white">
            <h2 class="p-5">TV</h2>
            <div class="row">
                <!-- <div class="col-12 col-md-4 col-lg-3 debugCol pb-5" v-for="(serie, index) in store.seriesList">
                    titlolo: {{ serie.name }} <br />
                    titlolo or: {{ serie.original_name }} <br />
                    lingua: {{ serie.original_language }} <br />
                    voto: {{ serie.vote_average }}

                </div> -->


                <div class="d-flex flex-row flex-wrap justify-content-start">
                    <div class=" w-auto flex-grow-1 p-2" v-for="(serie, index) in store.seriesList">
                        <CardComponent class="col-3 col-md-4 col-lg-12 debugCol pb-5" :title="serie.name"
                            :original_title="serie.original_title" :original_language="serie.original_language"
                            :vote_average="serie.vote_average" :poster_path="serie.poster_path" />
                    </div>
                </div>
            </div>

        </section>
    </main>
</template>

<script>
import { store } from '../data/store'
import CardComponent from './cardComponent.vue';
export default {
    name: "mainComponent",
    data() {
        return {
            store,
        };
    },
    components: { CardComponent }
}
</script>

<style lang="scss" scoped></style>