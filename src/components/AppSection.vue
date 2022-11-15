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
            // check if section is series or movies and change title name
            sectionTitle(){
                if(this.section === "movies"){
                    return "title"
                } else {
                    return "name"
                }
            },

             // check if section is series or movies and change original title name
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
                <!-- If no movies or series were found: -->
                <h2 v-if="!store[section].length">No {{section}} were found</h2>
                <!-- Else -->
                <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    <div class="col" v-for="element in store[section]" :key="element.id">
                        <!-- Cards -->
                        <AppCard :title="element[sectionTitle]" :originalTitle="element[sectionOriginalTitle]" :element="element"/>
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