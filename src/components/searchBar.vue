<template>
    <div class="search-bar d-flex flex-row justify-content-between  bg-black position-fixed d-flex flex-row align-items-center px-5 "
        @keyup.enter="emitParams" placeholder="Cerca..">
        <div class="title text-danger h-100">
            <img src="../assets/images/boolflix-logo.png" class="logo-adapter" alt="BOOLFLIX">
        </div>
        <div class="d-flex flex-row justify-content-center">
            <div class="home pe-5">
                <i class="fa-solid fa-home" style="color: white;"></i>
            </div>
            <div class="genrefinder">
                <select name="genreSelect" v-model="genre" id="genre" @change="selectGenre()">
                    <option value="" selected>GENERE</option>
                    <option v-for="opt in store.genreList" :value="opt.id" :key="opt.id">{{ opt.name }}</option>
                </select>
            </div>
            <div class="languageFilter">
                <select name="language-select" v-model="language" id="language" @change="selectLanguage()">
                    <option value="it-IT" selected>ITALIANO</option>
                    <option v-for="lang in listaLingue" :value="lang.value">{{ lang.name }}</option>
                </select>
            </div>
        </div>
        <div class="search-container d-flex  flex-row h-100 d-flex flex-row align-items-center gap-2 p-2  "
            :class="{ outline: textInput }">
            <i class="fa-solid fa-search" style="color: white;" @click="emitParams()"></i>
            <input class=" searhTextComponent" v-model="textInput" type="text" placeholder="search" />
            <i class="fa-solid fa-xmark " v-if="textInput" style="color: white;" @click="resetResearch()"></i>
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
            language: 'it-IT',
            listaLingue: [
                {
                    name: 'ENGLISH',
                    value: 'en-EN'
                },
                {
                    name: 'ESPANOL',
                    value: 'es-ES'
                },
                {
                    name: 'FRANCAIS',
                    value: 'fr-FR'
                },
                {
                    name: 'DEUTSCH',
                    value: 'de-DE'
                }
            ],
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
            this.$emit('change-values')
        },
        selectLanguage() {
            store.params.language = this.language;
            if (this.textInput !== "") {
                this.emitParams()
            }
        },
        resetResearch() {
            this.textInput = ''
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

.searhTextComponent {
    color: white;
    outline: none;
    background-color: black;
    height: 60%;
    padding: 0;
    border: 0px;
}

select,
option {
    background-color: black;
    color: white;
    outline: none;
    border: 0px;
    //to hide the dropdown arrow
    -webkit-appearance: none;
}

.language-selector {
    color: white;
}

.logo-adapter {
    max-height: 50px;
}

.outline {
    border: 1px solid gray;

}
</style>