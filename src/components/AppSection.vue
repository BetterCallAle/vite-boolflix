<script>
    import {store} from "../store";
    import AppCard from "./AppCard.vue";
    export default{
        name: "AppSection",
        props:{
            section: String
        },
        components:{
            AppCard
        },
        data(){
            return{
                store
            }
        },
        computed:{
            // check if section is title or movies and change title name
            sectionTitle(){
                if(this.section === "movies"){
                    return "title"
                } else {
                    return "name"
                }
            },

             // check if section is title or movies and change original title name
            sectionOriginalTitle(){
                if(this.section === "movies"){
                    return "original_title"
                } else {
                    return "original_name"
                }
            }
        }
    }
</script>

<template>
    <section id="movies-section">
        <div class="container">
            <!-- Section Heading -->
            <div class="section-heading">
                <h2>{{ section }}</h2>
            </div>
            <!-- /Section Heading -->

            <!-- Section Main -->
            <div class="section-main">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5">
                    <div class="col" v-for="element in store[section]" :key="element.id">
                        <!-- Cards -->
                        <AppCard :title="element[sectionTitle]" :originalTitle="element.original_name" :element="element"/>
                        <!-- /Cards -->
                    </div>
                </div>
            </div>
            <!-- /Section Main -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>