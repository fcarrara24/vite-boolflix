<template>
    <div class="my-card d-flex flex-column p-3 w-100 text-white" @mouseover="trigger()" @mouseleave="antiTrigger()"
        :style="'background-image: url(' + builtImgUrl + ');'">


        <div class="card-height d-flex flex-column justify-content-end">
            <img>
            <div v-if="hovered">
                <div class="title">{{ title }}</div>
                <div class="description">{{ original_title }}</div>
                <div class="img-container"></div>
                <div class="description d-flex flex-row justify-content-start gap-2 align-items-center">


                    <div class="img-container" v-for="num in 5" key="num">

                        <i class="fa-star" :class="(num <= Math.ceil(vote_average / 2)) ? 'fa-solid' : 'fa-regular'"></i>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    name: 'OtherCard',
    props: {
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number,
        poster_path: String

    },
    data() {


        return {
            hovered: false,
            currentFlag: ''
        }
    },
    methods: {
        trigger() {
            this.hovered = true

        },
        antiTrigger() {
            this.hovered = false
        },

    },
    computed: {
        builtImgUrl() {
            return 'https://image.tmdb.org/t/p/w342' + this.poster_path
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


}

.my-card:hover {

    background-image: none !important;
    ;
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
</style>

<style lang="scss" scoped></style>

<!-- <template>
    <div class="my-card d-flex flex-column p-3 w-100 text-white" :style="'background-image: url(' + builtImgUrl + ');'"
        @mouseover="trigger()" @mouseleave="antiTrigger()">

        <div class="card-height d-flex flex-column justify-content-end">
            <img :src="builtImgUrl" alt="" class="miniImg" v-if="hovered">
            <div class="z-hight  " v-if="hovered">
                <div class="title">{{ title }}</div>
                <div class="description">{{ original_title }}</div>
                <div class="img-container">
                    <img :src="currentFlag" @error="toDefSrc()">

                </div>
                <div class="description d-flex flex-row justify-content-start gap-2 align-items-center">

                    {{ getStar }}

                    <div class="img-container" v-for="num in 5" key="num">

                        <i class="fa-star" :class="(num <= Math.ceil(getStar / 2)) ? 'fa-solid' : 'fa-regular'"></i>
                    </div>
                </div>
            </div>
        </div>


    </div>
    {{ title }}
</template>

<script>



export default {
    name: 'CardComponent',
    props: {
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number,
        poster_path: String

    }

    ,
    data() {


        return {
            hovered: false,
            currentFlag: ''
        }
    },
    methods: {
        trigger() {
            this.hovered = true
        },
        antiTrigger() {
            this.hovered = false
        },
        toDefSrc() {
            this.currentFlag = 'https://flagsapi.com/' + 'GB' + '/flat/64.png';
        },
    },
    computed: {


        builtImgUrl() {
            return 'https://image.tmdb.org/t/p/w342' + this.poster_path
        },
        getStar() {
            return Math.floor(this.vote_average)
        }
    },
    created: {
        getFlagUrl() {
            let parsedString = this.original_language.toUpperCase().substring(0, 2)
            if (parsedString === "EN") {
                parsedString = "GB"
            } else if (parsedString === "JA") {
                parsedString = "JP"

            } else if (parsedString === "ZH") {
                parsedString = "SG"

            }
            console.log(parsedString)

            this.currentFlag = 'https://flagsapi.com/' + parsedString + '/flat/64.png';
        },
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
</style> -->