<script>
export default {
    name: "AppSearchFlag"
}
</script>

<template>
    <section>
        <div class="container">
            <h2 class="section-flag">Start searching movies or series</h2>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use "../styles/partials/variables" as *;
    .section-flag{
        text-align: center;
        color: $main-red;
        margin-top: 3rem
    }
</style>