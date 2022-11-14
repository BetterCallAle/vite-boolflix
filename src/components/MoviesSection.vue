<script>
    import AppSection from "./AppSection.vue";
    export default{
        name: "MoviesSection",
        components:{
            AppSection
        }
    }
</script>

<template>
    <AppSection :section="'movies'" />
</template>

<style lang="scss" scoped>
</style>