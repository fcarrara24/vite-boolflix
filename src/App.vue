<template>
  <SearchBar class="w-100 bg-black p-3" @change-values="getMovies(), getTv()" />
  <main>
    <section class="container">
      <h2>MOVIES</h2>
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3 debugCol" v-for="(movie, index) in store.movieList">
          {{ movie.title }} <br />
          titlolo or: {{ movie.original_title }} <br />
          lingua: {{ movie.original_language }} <br />
          voto: {{ movie.vote_average }}
        </div>
      </div>
    </section>

    <section class="container">
      <h2>TV</h2>
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3 debugCol" v-for="(serie, index) in store.seriesList">
          titlolo: {{ serie.name }} <br />
          titlolo or: {{ serie.original_name }} <br />
          lingua: {{ serie.original_language }} <br />
          voto: {{ serie.vote_average }}
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
          console.log(store.params.query)
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

<style lang="scss" scoped>
.debugCol {
  height: 200px;
}
</style>