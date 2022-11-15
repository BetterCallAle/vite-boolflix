<script>
  import axios from "axios";
  import AppHeader from "./components/AppHeader.vue";
  import AppSection from "./components/AppSection.vue";
  import { store } from "./store";
  
  export default{
    components:{
      AppHeader,
      AppSection
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
        this.callTheApiMovies()

        // Series API
        this.callTheApiSeries()
      },

      callTheApiMovies(){
        // Movies API
        axios
          .get(this.apiMoviesUrl)
          .then(resp =>{
            // add the json data in store
            this.store.movies = resp.data.results
            this.store.userSearch = ""
          }).catch(err => {
            console.log("error", err);
          })
      },

      callTheApiSeries(){
         // Series API
         axios
            .get(this.apiSeriesUrl)
            .then(resp =>{
              // add the json data in store
             this.store.series = resp.data.results
            }).catch(err =>{
              console.log("error", err);
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
  <AppHeader @searchBtnClicked="searchElement"/>
  <main>
    <AppSection :section="'movies'"/>
    <AppSection :section="'series'"/>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>