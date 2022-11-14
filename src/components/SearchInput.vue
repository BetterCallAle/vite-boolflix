<script>
    import {store} from "../store"
    export default{
        name: "SearchInput",
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <form>
        <input type="text" v-model="store.userSearch">
        <button @click.prevent="$emit('searchBtnClicked')">Cerca</button>
    </form>
</template>

<style lang="scss" scoped>
</style>