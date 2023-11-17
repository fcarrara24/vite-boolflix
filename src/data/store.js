import { reactive } from "vue"

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    genresUrl: "https://api.themoviedb.org/3/genre/movie/list",
    endPoint: {
        movie: "search/movie",
        series: "search/tv",
        movieCast: "movie/"
    },
    params: {
        api_key: "2685b6a8f123b29cd4c75c4bd228e18e",
        query: "",
        num: 20,
        offset: 0,
        language: "it-IT",

    },
    error: "",
    loading: true,
    movieList: [],
    seriesList: [],
    genreList: [],
    filteredGenres: ''
})

/*
https://developers.themoviedb.org/3/genres/get-movie-list
https://api.themoviedb.org/3/genre/movie/list?api_key=[MY_KEY]&language=en-US


*/