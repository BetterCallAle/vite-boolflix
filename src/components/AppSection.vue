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
            <div class="section-heading text-red mb-3">
                <h2>{{ section }}</h2>
            </div>
            <!-- /Section Heading -->

            <!-- Section Main -->
            <div class="section-main">
                <!-- If No movies or series were found -->
                <h2 class="text-red" v-if="!store[section].length && store[`${section}Called`]">No {{ section }} found</h2>
                <!-- Else -->
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3" v-else>
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