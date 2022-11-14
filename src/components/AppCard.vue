<script>
    import {store} from "../store"
    export default{
        name: "AppCard",
        props: {
            title: String,
            originalTitle: String,
            element: Object
        },
        data(){
            return{
                isImgInDatabase: false,
                store
            }
        },
        methods:{
            checkIfThereIsImg(){
                if(this.element.original_language === "it" || this.element.original_language === "en" || this.element.original_language === "fr" || this.element.original_language === "de"){
                    this.isImgInDatabase = true;
                }
            },

            getImgPath(imgName){
                return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
            }
        },
        created(){
            this.checkIfThereIsImg()
        }
    }
</script>

<template>
    <div class="ms_card">
        <div class="ms_card-img">
            <img :src="store.coverURL + element.backdrop_path" :alt="`Cover di ${title}`">
        </div>
        <ul>
            <li>Titolo: {{ title }}</li>
            <li>Titolo Originale: {{ originalTitle }}</li>
            <li>
                <span>Lingua Originale: </span>
                <img v-if="isImgInDatabase" :src="getImgPath(element.original_language)" :alt="`Bandiera ${element.original_language}`" class="flag-img">
                <span v-else>{{ element.original_language }}</span>
            </li>
            <li>Voto: {{ element.original_language }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.ms_card{
    .flag-img{
        width: 20px;
    }
}
</style>
