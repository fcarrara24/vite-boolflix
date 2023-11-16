<template>
    <div class=" d-flex flex-row justify-content-between  bg-black position-fixed " @keyup.enter="emitParams()"
        placeholder="Cerca..">
        <div class="title text-danger ">
            BOOLFLIX
        </div>
        <div class="search-container d-flex  flex-row">
            <input v-model="data" type="text" />
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
            data: '',
            store,
        }
    },
    methods: {

        emitParams() {

            if (this.data) {
                this.store.params.query = this.data
                this.$emit('change-values')


            }
            this.plHold = this.data
        }
    },
    emits: {
        click: null,
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 2em;
}
</style>