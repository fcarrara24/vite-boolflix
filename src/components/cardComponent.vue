<template>
    <div class="card  d-flex flex-column p-3">
        <img :src="getFlagUrl" :alt="original_language">
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
            }
            console.log(parsedString)
            return 'https://flagsapi.com/' + parsedString + '/flat/64.png';
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    min-height: 200px;
}
</style>