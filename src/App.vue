<script>
  import axios from "axios";
  import AppHeader from "./components/AppHeader.vue";
  import AppSection from "./components/AppSection.vue";
  import AppSectionFlag from "./components/AppSectionFlag.vue";
  import { store } from "./store";
  
  export default{
    components:{
      AppHeader,
      AppSection,
      AppSectionFlag
    },
    data(){
      return{
        store
      }
    },
    methods:{
      //reset the page
      resetPage(){
        this.store.movies = [];
        this.store.series = [];
        this.store.moviesCalled = false;
        this.store.seriesCalled = false;
      },

      // call the api when clicking search button
      searchElement(){
        //clear the movies and series array in store
        this.resetPage()
        // if user search is not empty
        if(this.store.userSearch){
          //if user select is both
          if(this.store.userSelect === "both"){
            // call movies API
            this.callTheApiMovies();
            // call series API
            this.callTheApiSeries();
            //else if is movies
          } else if(this.store.userSelect === "movies"){
            // call the movies api
            this.callTheApiMovies();
          } else {
            //call the series api
            this.callTheApiSeries();
          }
        }
      },

      callTheApiMovies(){
        axios
          .get(this.apiMoviesUrl)
          .then(resp =>{
            // add the json data in store
            this.store.movies = resp.data.results;
          }).catch(err => {
            console.log("error", err);
          }).finally(()=>{
            // clear the input and make the results visible
            this.store.userSearch = "";
            this.store.moviesCalled = true;
          })
      },

      callTheApiSeries(){
         // Series API
         axios
            .get(this.apiSeriesUrl)
            .then(resp =>{
              // add the json data in store
              this.store.series = resp.data.results;
            }).catch(err =>{
              console.log("error", err);
            }).finally(()=>{
              // clear the input and make the results visible
              this.store.userSearch = "";
              this.store.seriesCalled = true;
            })
      }
    },
    computed:{
      apiMoviesUrl(){
        return this.store.apiURL + "movie?" + "api_key=" + this.store.apiKey + "&query=" + this.store.userSearch;
      },
      apiSeriesUrl(){
        return this.store.apiURL + "tv?" + "api_key=" + this.store.apiKey + "&query=" + this.store.userSearch;
      }
    }
  }
</script>

<template>
  <div class="app-wrapper">
    <AppHeader @searchBtnClicked="searchElement" @logoClicked="resetPage"/>

    <main>
      <!-- Before clicking the 'search' button -->
      <AppSectionFlag v-if="!store.seriesCalled && !store.moviesCalled"/>
      <!-- If there are movies or series -->
      <AppSection v-if="store.moviesCalled" :section="'movies'"/>
      <AppSection v-if="store.seriesCalled" :section="'series'"/>
    </main>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>