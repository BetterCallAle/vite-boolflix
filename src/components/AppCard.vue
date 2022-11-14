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
                emptyStars: 5,
                store
            }
        },
        created(){
            this.checkIfThereIsImg();
            this.convertVotes()
        },

        methods:{
            // Check if the flag img is in database
            checkIfThereIsImg(){
                if(this.element.original_language === "it" || this.element.original_language === "en" || this.element.original_language === "fr" || this.element.original_language === "de" || this.element.original_language === "ja"){
                    this.isImgInDatabase = true;
                }
            },

            // Take the img path
            getImgPath(imgName){
                return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
            },

            // convert the votes
            convertVotes(){
                this.element.vote_average = Math.ceil(this.element.vote_average / 2);
                this.emptyStars = 5 - this.element.vote_average
            }
        }
    }
</script>

<template>
    <div class="ms_card text-center">

        <div class="ms_card-img">
            <img :src="store.coverURL + element.backdrop_path" :alt="`Cover di ${title}`">
        </div>

        <div class="ms_card-info">
            <ul>
                <li>Titolo: {{ title }}</li>
                <li>Titolo Originale: {{ originalTitle }}</li>
                <li>
                    <span>Lingua Originale: </span>
                    <img v-if="isImgInDatabase" :src="getImgPath(element.original_language)" :alt="`Bandiera ${element.original_language}`" class="flag-img">
                    <span v-else>{{ element.original_language }}</span>
                </li>
                <li>
                    Voto:
                    <i class="fa-solid fa-star" v-for="star in element.vote_average"></i>
                    <i class="fa-regular fa-star" v-for="star in emptyStars"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_card{
    .flag-img{
        width: 20px;
    }
}
</style>
