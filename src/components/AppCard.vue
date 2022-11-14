<script>
    export default{
        name: "AppCard",
        props: {
            title: String,
            originalTitle: String,
            lang: String,
            vote: Number
        }
    }
</script>

<template>
    <div class="ms_card">
        <ul>
            <li>Titolo: {{ title }}</li>
            <li>Titolo Originale: {{ originalTitle }}</li>
            <li>Lingua Originale: {{ lang }}</li>
            <li>Voto: {{ vote }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
</style>
