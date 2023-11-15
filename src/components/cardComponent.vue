<template>
    <div class="my-card d-flex flex-column p-3 ">
        <div class="big-img-container w-100 ">
            <img :src="builtImgUrl" alt="">
        </div>
        <div class="title">{{ title }}</div>
        <div class="description">{{ original_title }}</div>
        <div class="img-container">
            <img :src="getFlagUrl" :alt="original_language">
        </div>
        <div class="description">{{ vote_average }}</div>

    </div>
</template>

<script>
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


        return {}
    },
    methods: {

    },
    computed: {
        getFlagUrl() {
            let parsedString = this.original_language.toUpperCase().substring(0, 2)
            if (parsedString === "EN") {
                parsedString = "US"
            } else if (parsedString === "JA") {
                parsedString = "JS"

            }
            console.log(parsedString)
            return 'https://flagsapi.com/' + parsedString + '/flat/64.png';
        },
        builtImgUrl() {
            return 'https://image.tmdb.org/t/p/w342' + this.poster_path
        }
    }
}
</script>

<style lang="scss" scoped>
.my-card {
    color: black;
    background-color: white;
    min-height: 200px;
    min-width: 200px;
    height: 100%;

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