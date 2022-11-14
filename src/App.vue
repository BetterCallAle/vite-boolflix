<script>
  import axios from "axios";
  import SearchInput from "./components/SearchInput.vue";
  import MoviesSection from "./components/moviesSection.vue";
  import { store } from "./store";
  
  export default{
    components:{
      SearchInput,
      MoviesSection
    },
    data(){
      return{
        store
      }
    },
    methods:{
      searchElement(){
        this.store.isPageLoading = true;
        axios.get(this.apiMoviesUrl)
        .then(resp =>{
          this.store.movies = resp.data.results
          console.log(this.store.movies);
        })
      }
    },
    computed:{
      apiMoviesUrl(){
        return this.store.apiMoviesURL + "api_key=" + this.store.apiKey + "&query=" + this.store.userSearch;
      }
    }
  }
</script>

<template>
  <SearchInput @searchBtnClicked="searchElement"/>
  <MoviesSection />
</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>