import { reactive } from "vue"

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    endPoint: {
        movie: "search/movie",
        series: "search/tv"
    },
    params: {
        api_key: "2685b6a8f123b29cd4c75c4bd228e18e",
        query: "a",
        num: 20,
        offset: 0
    },
    error: "",
    loading: true,
    movieList: [],
    seriesList: []

})

// to get images init url, than you have to link the rest 342 500 for dimesnions acceptance
/*
https://image.tmdb.org/t/p/w342


poster_path
: 
"/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg"
*/