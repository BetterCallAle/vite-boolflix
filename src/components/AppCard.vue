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
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li>{{ lang }}</li>
            <li>{{ vote }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
</style>
