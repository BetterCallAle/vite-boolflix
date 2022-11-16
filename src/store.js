import {reactive} from "vue";

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/search/",
    apiKey: "75647ca12616033896b9bcef942dad42",
    userSearch: "",
    userSelect: "both",
    coverURL: "http://image.tmdb.org/t/p/w342/",
    movies: [],
    series: [],
    isMoviesLoaded: false,
    isSeriesLoaded: false
})
