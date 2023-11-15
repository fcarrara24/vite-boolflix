<template>
    <div class="my-card d-flex flex-column p-3 w-100 text-white" :style="'background-image: url(' + builtImgUrl + ');'"
        @mouseover="trigger()" @mouseleave="antiTrigger()">
        <!-- <div class="big-img-container w-100 ">
            <img :src="builtImgUrl" alt="">
        </div> -->
        <div class="card-height">
            <img :src="builtImgUrl" alt="" v-if="hovered">
        </div>
        <div v-if="hovered">
            <div class="title">{{ title }}</div>
            <div class="description">{{ original_title }}</div>
            <div class="img-container">
                <img :src="getFlagUrl" :alt="original_language">
            </div>
            <div class="description d-flex flex-row justify-content-start gap-2 align-items-center">
                <!-- score -->
                {{ this.getStar }}
                <!-- stars -->
                <div class="img-container" v-for="num in getStar">
                    <img src="../assets/images/star.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'cardComponent',
    props: {
        title: String,
        original_title: String,
        original_language: String,
        vote_average: String,
        poster_path: String

    }

    ,
    data() {


        return {
            hovered: false
        }
    },
    methods: {
        trigger() {
            this.hovered = true
        },
        antiTrigger() {
            this.hovered = false
        }
    },
    computed: {
        getFlagUrl() {
            let parsedString = this.original_language.toUpperCase().substring(0, 2)
            if (parsedString === "EN") {
                parsedString = "US"
            } else if (parsedString === "JA") {
                parsedString = "JP"

            } else if (parsedString === "ZH") {
                parsedString = "SG"

            }
            console.log(parsedString)

            return 'https://flagsapi.com/' + parsedString + '/flat/64.png';
        },
        builtImgUrl() {
            return 'https://image.tmdb.org/t/p/w342' + this.poster_path
        },
        getStar() {
            return Math.floor(this.vote_average)
        }
    }
}
</script>

<style lang="scss" scoped>
.my-card {
    color: black;
    background-color: black;
    min-height: 20vh;
    min-width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;


}

.my-card:hover {
    //transform: rotateY(180deg);
    background-image: none !important;
    ;
}

.card-height {
    //this will act as an image proportion keeper for the display of elements
    height: 500px;
    width: 400px;
}

.big-img-container {
    width: 100%;
}

.img-container {
    width: 20px;
}

img {
    min-width: 100%;
    max-width: 100%;
    height: auto;
}
</style>