<template>
  <SearchBar class="w-100 bg-black p-3" @change-values="getMovies(), getTv()" />
  <MainComponent />

  <div>
  </div>
</template>

<script>
import MainComponent from './components/mainComponent.vue';
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
    },

  },
  components: {
    SearchBar,
    MainComponent
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