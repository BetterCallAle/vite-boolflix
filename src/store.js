import {reactive} from "vue";

export const store = reactive({
    apiMoviesURL: "https://api.themoviedb.org/3/search/movie?",
    apiSeriesURL: "https://api.themoviedb.org/3/search/tv?",
    apiKey: "75647ca12616033896b9bcef942dad42",
    isPageLoading: false,
    userSearch: "",
    movies: null,
    series: null
})
