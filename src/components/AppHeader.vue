<script>
    import {store} from "../store"
    export default{
        name: "AppHeader",
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <header class="d-flex align-items-center">
        <div class="container d-flex justify-content-between">
            <div class="logo">
                <a href="#">
                    <h1 class="text-red">Boolflix</h1>
                </a>
            </div>
    
            <form>
                <input type="text" v-model="store.userSearch" class="ms_input" placeholder="Search movies or series">
                <button @click.prevent="$emit('searchBtnClicked')" class="btn ms_btn">Search</button>
            </form>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

header{
    height: $header-height;
    background-color: $header-bg;

    a{
        text-decoration: none;
    }

    form{
        .ms_input{
            padding: 0.55rem 0.5rem 0.330rem;
            border-radius: .375rem;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            border: none;

            &:focus{
                outline: none;
            }

            &::placeholder{
                color: lighten($main-bg, 50%);
            }
        }
        

        .ms_btn{
            background-color: $main-red;
            color: white;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }
    }
}
</style>