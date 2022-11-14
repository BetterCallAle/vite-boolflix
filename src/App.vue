<script>
  import axios from "axios";
  import SearchInput from "./components/SearchInput.vue";
  import MoviesSection from "./components/moviesSection.vue";
  import SeriesSection from "./components/SeriesSection.vue";
  import { store } from "./store";
  
  export default{
    components:{
      SearchInput,
      MoviesSection,
      SeriesSection
    },
    data(){
      return{
        store
      }
    },
    methods:{
      searchElement(){
        this.store.isPageLoading = true;

        // Movies API
        axios.get(this.apiMoviesUrl)
            .then(resp =>{
              this.store.movies = resp.data.results
            })

        // Series API
        axios.get(this.apiSeriesUrl)
              .then(resp =>{
             this.store.series = resp.data.results
        })
      }
    },
    computed:{
      apiMoviesUrl(){
        return this.store.apiMoviesURL + "api_key=" + this.store.apiKey + "&query=" + this.store.userSearch;
      },
      apiSeriesUrl(){
        return this.store.apiSeriesURL + "api_key=" + this.store.apiKey + "&query=" + this.store.userSearch;
      }
    }
  }
</script>

<template>
  <SearchInput @searchBtnClicked="searchElement"/>
  <MoviesSection />
  <SeriesSection />
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>