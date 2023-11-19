<template>
    <div class="whole-component d-flex flex-row justify-content-center position-relative ">
        <div class="video-component position-absolute d-flex flex-column align-items-center  ">
            <div v-if="videoId" class="w-100">
                <iframe class="adaptDimensionsFilm"
                    :src="'https://www.youtube.com/embed/' + videoId + '?autoplay=1&modestbranding=1&controls=0'"
                    frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="title">
                {{ store.titleSelected }}
            </div>
        </div>
        <img class="backdropImg" :src="getImgUrl" alt="">
    </div>
</template>

<script>
import axios from 'axios'
import { store } from '../data/store'
export default {
    name: 'MidComponent',

    data() {


        return {
            videoId: 'Opxhh9Oh3rg',
            store,
        }
    },
    methods: {
        searchVideo() {
            console.log(store)
            let title = this.store.titleSelected;

            const response = axios
                .get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: 'AIzaSyBjCfQ44t0qX0QTOcaS5Stj6ifELAF3SEk',
                        q: title,
                        part: 'snippet',
                        type: 'video',
                        maxResults: 1,
                    }
                })
                .then((response) => {
                    if (response.data.items.length > 0) {
                        this.videoId = response.data.items[0].id.videoId;

                    }
                })
                .catch(
                    (error) => {
                        console.log(error)
                    }

                )


        }
    },
    created() {
    },
    computed: {
        getImgUrl() {
            this.searchVideo()
            return 'https://image.tmdb.org/t/p/w1280' + store.backDropSelected
        },


    }
}
</script>

<style lang="scss" scoped>
.whole-component {
    background-color: red;
    width: 100%;
    min-height: 500px;
    position: relative;
}

.backdropImg {
    width: 100%;
    min-height: 100%;
    max-height: auto;
    overflow-y: hidden;
}

.video-component {
    height: 50vw;
    width: 50vw;
    max-width: 60vh;
    max-height: 60vh;
    background-color: blue;
    top: 50%;
    transform: translate(0, -50%);
}

.adaptDimensionsFilm {

    height: auto;
    min-height: 50%;
    min-width: 100%;
    max-width: 100%;
}
</style>