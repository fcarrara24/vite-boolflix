import { reactive } from "vue"

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    genresUrl: "https://api.themoviedb.org/3/genre/movie/list",
    tvCredits: 'https://api.themoviedb.org/3/person/person_id/tv_credits?language=en-US',
    endPoint: {
        movie: "search/movie",
        series: "search/tv",
        movieCast: "movie/",
        serieCast: "tv/"
    },
    params: {
        api_key: "2685b6a8f123b29cd4c75c4bd228e18e",
        query: "netflix",
        num: 20,
        offset: 0,
        language: "it-IT",

    },
    error: "",
    loading: true,
    movieList: [],
    seriesList: [],
    genreList: [],
    filteredGenres: '',

    backDropSelected: '',
    titleSelected: 'netflix',


})

