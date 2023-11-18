<template>
    <div class="my-card d-flex flex-column p-3 w-100 text-white flip-card" @mouseover="trigger()"
        @mouseleave="antiTrigger()" :style="'background-image: url(' + builtImgUrl + ');'" @error="changeBgImg()"
        @click="getCredits(), getGenres()">


        <div class="card-height  p-3r flip-card-inner">
            <div class="flip-card-front"></div>
            <!-- v-if="hovered" -->
            <div v-if="hovered" class="d-flex flex-column justify-content-between h-100 flip-card-back">
                <div class="p-2 overflow-auto ">
                    {{ overview }}
                    <div class="cardcast py-2" v-if="cardCast.length > 0">
                        <span class="py-1">ATTORI<br></span>
                        <span v-for="person in cardCast">{{ person }} <br></span>
                        <div class="genre py-2 ">
                            genere: {{ genre }}
                        </div>
                    </div>

                </div>


                <div>

                    <div class="title">{{ title }}</div>
                    <div class="description">{{ original_title }}</div>
                    <div class="img-container">
                        <img :src="getFlagUrl" @error="toDefSrc()">
                    </div>
                    <div class="description d-flex flex-row justify-content-start gap-2 align-items-center">
                        <div class="img-container" v-for="num in 5" key="num">
                            <i class="fa-star"
                                :class="(num <= Math.ceil(vote_average / 2)) ? 'fa-solid' : 'fa-regular'"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
import { store } from '../data/store'
import axios from 'axios'

export default {
    name: 'OtherCard',
    props: {
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number,
        poster_path: String,
        overview: String,
        id: Number,
        cast: Array,
        movie: Object,
        isMovie: Boolean,
        genre_ids: Number,
        genre_name: String

    },
    data() {


        return {
            hovered: false,
            error: false,
            clicked: false,
            cardCast: [],
            genre: '',
            bgImgNotFound: false
        }
    },
    methods: {
        changeBgImg() {
            this.bgImgNotFound = true
        },
        trigger() {
            this.hovered = true

        },
        antiTrigger() {
            this.hovered = false
        },
        toDefSrc() {
            this.error = true
        },
        getCredits() {
            if (this.clicked) {
                return
            }
            this.clicked = true
            let cast = [];
            let myEndPoint;
            if (this.isMovie) {
                myEndPoint = store.endPoint.movieCast + this.id + '/credits';
            } else {
                myEndPoint = store.endPoint.serieCast + this.id + '/credits';
            }
            console.log(myEndPoint)
            const params = {
                api_key: store.params.api_key
            }
            axios
                .get(store.apiUrl + myEndPoint, { params: params })
                .then((response) => {
                    console.log(response.data.casts)
                    for (let i = 0; i < 5; i++) {
                        if (response.data.cast[i]) {
                            cast.push(response.data.cast[i].name)
                        }
                    }
                    console.log(cast)
                    const myId = this.id
                    if (this.isMovie) {
                        for (let i = 0; i < store.movieList.length; i++) {
                            if (store.movieList[i].id === this.id) {
                                store.movieList[i].casts = cast
                                this.cardCast = cast
                                console.log(response);
                            }
                        }
                    } else {
                        for (let i = 0; i < store.seriesList.length; i++) {
                            if (store.seriesList[i].id === this.id) {
                                store.seriesList[i].casts = cast
                                this.cardCast = cast
                            }
                        }
                    }
                }).catch(error => {
                    console.log(error)
                })


        },
        getGenres() {
            store.genreList.forEach(element => {
                if (element.id === this.genre_ids) {
                    this.genre = element.name

                    return
                }

            });
            if (this.genre === '') {
                this.genre = ''

            }
        }




    },
    computed: {
        builtImgUrl() {
            return 'https://image.tmdb.org/t/p/w342' + this.poster_path
        },

        getFlagUrl() {
            if (this.error) {
                return 'https://flagsapi.com/' + 'GB' + '/flat/64.png';
            } else {
                let parsedString = this.original_language.toUpperCase().substring(0, 2)
                if (parsedString === "EN") {
                    parsedString = "GB"
                } else if (parsedString === "JA") {
                    parsedString = "JP"

                } else if (parsedString === "ZH") {
                    parsedString = "SG"

                }

                return 'https://flagsapi.com/' + parsedString + '/flat/64.png';
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.my-card {
    color: black;

    min-height: 20vh;
    min-width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    perspective: 1000px;

}

.my-card:hover {

    background-image: none !important;

}

.card-height {

    height: 600px;
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

.z-hight {
    z-index: 1000;
}

.miniImg {
    width: 100px;
    height: auto;
}

.flip-card-inner {
    transition: transform 0.8s;
    transform-style: preserve-3d;


}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-back {
    transform: scaleX(-1);
}
</style>

<style lang="scss" scoped></style>
