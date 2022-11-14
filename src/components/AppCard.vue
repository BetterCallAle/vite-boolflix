<script>
    export default{
        name: "AppCard",
        props: {
            title: String,
            originalTitle: String,
            lang: String,
            vote: Number
        },
        data(){
            return{
                isImgInDatabase: false
            }
        },
        methods:{
            checkIfThereIsImg(){
                if(this.lang === "it" || this.lang === "en" || this.lang === "fr" || this.lang === "de"){
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
        <ul>
            <li>Titolo: {{ title }}</li>
            <li>Titolo Originale: {{ originalTitle }}</li>
            <li>
                <span>Lingua Originale: </span>
                <img v-if="isImgInDatabase" :src="getImgPath(lang)" :alt="`Bandiera ${lang}`" class="flag-img">
                <span v-else>{{ lang }}</span>
            </li>
            <li>Voto: {{ vote }}</li>
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
