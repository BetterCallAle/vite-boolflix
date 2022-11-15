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
                flagInDatabase: ["it", "de", "en", "fr", "ja"],
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
                if(this.flagInDatabase.includes(this.element.original_language)){
                    this.isImgInDatabase = true;
                }
            },

            // Take the img path
            getImgPath(imgName){
                return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
            },

            // convert the votes and change the empty stars number
            convertVotes(){
                this.element.vote_average = Math.ceil(this.element.vote_average / 2);
                this.emptyStars = 5 - this.element.vote_average
            }
        }
    }
</script>

<template>
    <div class="ms_card text-center">

        <div class="ms_card-wrapper">
            <!-- card img -->
            <div class="ms_card-img">
                <img :src="store.coverURL + element.poster_path" :alt="`Cover di ${title}`">
            </div>
            <!-- /card img -->
    
            <!-- card info -->
            <div class="ms_card-info">
                <ul>
    
                    <li> 
                        <h4>{{ title }}</h4>
                    </li>
    
                    <li>
                        <span class="text-red">Original Title: </span>
                        <span>{{ originalTitle }}</span>
                    </li>
    
                    <li>
                        <span class="text-red">Original Language: </span>
                        <img v-if="isImgInDatabase" :src="getImgPath(element.original_language)" :alt="`Bandiera ${element.original_language}`" class="flag-img">
                        <span v-else>{{ element.original_language }}</span>
                    </li>
    
                    <li>
                        <span class="text-red">Vote: </span>
                        <i class="fa-solid fa-star" v-for="star in element.vote_average"></i>
                        <i class="fa-regular fa-star" v-for="star in emptyStars"></i>
                    </li>
    
                    <li> 
                        <span class="text-red">Synopsis: </span>
                        <span>{{element.overview}}</span>
                    </li>
    
                </ul>
            </div>
            <!-- card info -->
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.ms_card{
    height: 100%;
    background-color: $header-bg;
    border: 1px solid white;

    /* Card wrapper */
    .ms_card-wrapper{
        height: 100%;
        transform: rotateY(0deg);
        transition: all 500ms linear;

        .ms_card-img{
            img{
                display: block;
            }
        }
    
        .ms_card-info{
            display: none;
            transform: rotateY(180deg);
            padding: 1.3rem .7rem;
            height: $card-height;
            overflow-y: auto;
            transition: all 300ms linear;
            
            /* Scrollbar */
            /* Scrollbar dimension */
            &::-webkit-scrollbar {
                width: 5px;
            }
    
            /* Scrollbar track */
            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px grey; 
                border-radius: 10px;
            }
    
            /* Scrollbar color */
            &::-webkit-scrollbar-thumb {
                background: $main-red; 
                border-radius: 10px;
            }
    
            /* Scrollbar Hover */
            &::-webkit-scrollbar-thumb:hover {
                background: lighten($main-red, 10%); 
            }
            /* Scrollbar */
    
            .flag-img{
                width: $flag-width;
            }
    
            li{
                margin-bottom: .8rem;
            }
    
            .text-red{
                margin-right: .2rem;
            }
    
            .fa-star{
                color: $star-color;
            }
        }
    
    }
    /* /Card wrapper */

    &:hover .ms_card-wrapper{
        transform: rotateY(180deg);
    }

    &:hover .ms_card-info{
       display: block;
    }

    &:hover .ms_card-img{
        display: none;
    }
    
}
</style>
