<template>
  <SearchBar class="w-100 bg-black p-3" @change-values="getMovies, getTv" />
  <main>
    <section class="container">
      <h2>MOVIES</h2>
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3" v-for="(movie, index) in store.movieList">
          {{ movie.title }}
        </div>
      </div>
    </section>

    <section class="container">
      <h2>TV</h2>
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3" v-for="(movie, index) in store.seriesList">
          {{ movie.name }}
        </div>
      </div>
    </section>
  </main>
  <div>
  </div>
</template>

<script>
import SearchBar from './components/searchBar.vue';
import { store } from './data/store.js'
import axios from 'axios'

export default {
  name: "App",
  data() {
    return {
      store,

    };
  },
  methods: {
    getMovies() {
      const url = store.apiUrl + store.endPoint.movie
      axios
        .get(url, { params: this.store.params })
        .then((response) => {
          console.log(response.data.results)
          this.store.movieList = response.data.results;

        }
        )
    },
    getTv() {
      const url = store.apiUrl + store.endPoint.series
      axios
        .get(url, { params: this.store.params })
        .then((response) => {
          console.log(response.data.results)
          this.store.seriesList = response.data.results;

        }
        )
    }
  },
  components: {
    SearchBar
  },
  created() {
    this.getMovies();
    this.getTv();
  }
}
</script>

<style lang="scss" scoped></style>