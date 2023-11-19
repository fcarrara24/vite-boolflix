<template>
    <div class="whole-component d-flex flex-row justify-content-center position-relative ">
        <div class="video-component position-absolute d-flex flex-column align-items-center  ">
            <div v-if="videoId" class="w-100 h-100 p-2  d-flex flex-row justify-content-center flex-grow-0 ">
                <iframe class="adaptDimensionsFilm"
                    :src="'https://www.youtube.com/embed/' + videoId + '?autoplay=1&modestbranding=1&controls=0'"
                    frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="title text-white text-center ">
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
            videoId: 'v=waJKJW_XU90',
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
                        key: 'AIzaSyDCYTLkMlEeeF5WkbGh-W6m6BcpbCjh2tw',
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
    background-color: #dc1a28;
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
    width: 50vw;
    max-width: 60vh;
    max-height: 40vh;
    background-image: linear-gradient();
    border: 30px solid transparent;
    top: 50%;
    transform: translate(0, -50%);
}

.adaptDimensionsFilm {
    // expected height rateo is width = 1.77 height 
    min-height: 50%;
    min-width: 90%;
}
</style>