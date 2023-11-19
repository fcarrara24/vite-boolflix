<template>
  <SearchBar class="w-100 bg-black p-2" @change-values="getMovies(), getTv()" />
  <MainComponent class="paddingCostume" />

  <div>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue';
import SearchBar from './components/SearchBar.vue';

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
          store.movieList = response.data.results;

        }
        )
    },
    getTv() {
      const url = store.apiUrl + store.endPoint.series
      axios
        .get(url, { params: this.store.params })
        .then((response) => {
          console.log(response.data.results)
          store.seriesList = response.data.results;

        })
    },
    getGenreList() {
      axios
        .get(store.genresUrl, { params: store.params })
        .then((response) => {
          this.store.genreList = response.data.genres;
        }
        )
    }

  },
  components: {
    SearchBar,
    MainComponent
  },
  created() {
    this.getMovies();
    this.getTv();
    this.getGenreList();
  }
}
</script>

<style lang="scss" scoped>
.debugCol {
  height: 200px;
}
</style>