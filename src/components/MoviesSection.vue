<script>
    import {store} from "../store";
    import AppCard from "./AppCard.vue";
    export default{
        name: "MoviesSection",
        components:{
            AppCard
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <section id="movies-section">
        <div class="container">
            <h2>Movies</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col" v-for="element in store.movies" :key="element.id">
                    <AppCard :title="element.title" :originalTitle="element.original_title" :element="element"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>