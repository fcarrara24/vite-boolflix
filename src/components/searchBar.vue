<template>
    <div class=" d-flex flex-row justify-content-between ">
        <input v-model="data" type="text" />
        <button @click="emitParams()">search</button>
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
                this.$emit = ('change-values')
            }

        }
    },
    emits: {
        click: null,
    }
}
</script>

<style lang="scss" scoped></style>