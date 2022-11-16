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
        <div class="container d-flex flex-column flex-sm-row justify-content-between">
            <div class="logo">
                <a href="#" @click="$emit('logoClicked')">
                    <h1 class="text-red">Boolflix</h1>
                </a>
            </div>
    
            <form>
                <select id="movies-or-series" v-model="store.userSelect" class="ms_form ms_select">
                    <option value="both">Movies and Series</option>
                    <option value="movies">Movies</option>
                    <option value="series">Series</option>
                </select>
                <input type="text" v-model="store.userSearch" class="ms_form ms_input" placeholder="Search movies or series">
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
        .ms_form{
            border: none;
            padding: 0.55rem 0.5rem 0;

            &:focus{
                outline: none;
            }
        }
        .ms_select{
            padding-bottom: 0.4rem;
            outline: none;
            border-radius: .375rem;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
        }
        .ms_input{
            border: none;
            padding-bottom: 0.330rem;

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