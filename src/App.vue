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
      // call the api when clicking search button
      searchElement(){
        // if user search is not empty
        if(this.store.userSearch){
          // call movies API
          this.callTheApiMovies()

          // call series API
          this.callTheApiSeries()
        }
      },

      callTheApiMovies(){
        axios
          .get(this.apiMoviesUrl)
          .then(resp =>{
            // add the json data in store
            this.store.movies = resp.data.results
            // clear the input
            this.store.userSearch = ""
          }).catch(err => {
            console.error("error", err);
          }).finally(()=> {
            // Show results
            this.store.isPageLoaded = true;
          })
      },

      callTheApiSeries(){
         // Series API
         axios
            .get(this.apiSeriesUrl)
            .then(resp =>{
              // add the json data in store
              this.store.series = resp.data.results
              // clear the input
              this.store.userSearch = ""
            }).catch(err =>{
              console.log("error", err);
            }).finally(()=> {
              // Show results
              this.store.isPageLoading = false;
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
  <div class="app-wrapper">
    <AppHeader @searchBtnClicked="searchElement"/>

    <main>
      <!-- If the search button is clicked -->
      <AppSection v-if="store.isPageLoaded" :section="'movies'"/>
      <AppSection v-if="store.isPageLoaded" :section="'series'"/>
      <!-- Else -->
      <AppSectionFlag v-else/>
    </main>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>