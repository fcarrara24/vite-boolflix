<template>
    <div class="search-bar d-flex flex-row justify-content-between  bg-black position-fixed " @keyup.enter="emitParams"
        placeholder="Cerca..">
        <div class="title text-danger ">
            BOOLFLIX
        </div>
        <div class="genrefinder">
            <select name="genreSelect" v-model="genre" id="" @change="selectGenre()">
                <option value="" selected>ALL</option>
                <option v-for="opt in store.genreList" :value="opt.id" :key="opt.id">{{ opt.name }}</option>
            </select>
        </div>
        <div class="search-container d-flex  flex-row">
            <input v-model="textInput" type="text" />
            <div class="button bg-danger my-btn-search text-center p-2" @click="emitParams()">search</div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store'

export default {
    name: 'searchBar',
    data() {
        return {
            textInput: '',
            store,
            genre: '',
        }
    },
    emits: ['change-values'],
    methods: {

        emitParams() {

            if (this.textInput) {
                this.store.params.query = this.textInput
                this.$emit('change-values')
                console.log(store.genreList[0])


            }
        },
        selectGenre() {
            store.filteredGenres = this.genre
        }

    },


}
</script>

<style lang="scss" scoped>
.title {
    font-size: 2em;
}

.search-bar {
    z-index: 3000;
    perspective: 200px;
}
</style>