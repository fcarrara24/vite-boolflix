<template>
    <div class="my-card d-flex flex-column p-3 w-100">
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
        vote_average: String
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


}

.img-container {
    width: 20px;
}

img {
    max-width: 100%;
    height: auto;
}
</style>