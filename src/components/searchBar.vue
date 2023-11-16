<template>
    <div class=" d-flex flex-row justify-content-between  bg-black position-fixed " @keyup.enter="emitParams"
        placeholder="Cerca..">
        <div class="title text-danger ">
            BOOLFLIX
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
        }
    },
    emits: ['change-values'],
    methods: {

        emitParams() {

            if (this.textInput) {
                this.store.params.query = this.textInput
                this.$emit('change-values')


            }
        }
    },

}
</script>

<style lang="scss" scoped>
.title {
    font-size: 2em;
}
</style>