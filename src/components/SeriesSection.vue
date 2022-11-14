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
            <h2>Series</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col" v-for="element in store.series" :key="element.id">
                    <AppCard :title="element.name" :originalTitle="element.original_name" :element="element"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>