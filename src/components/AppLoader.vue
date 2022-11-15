<script>
export default{
    name:"AppLoader"
}
</script>

<template>
    <section>
        <div class="container text-center">
            <h2 class="text-red app-loader mt-5">B</h2>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.app-loader{
    position: relative;
    &::after{
        content: "";
        display: block;
        border: 4px dotted red;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        position: absolute;
        transform: translate(-50%, -50%);
        top: -11px;
        left: 47.3%;
        animation: spin 300ms infinite;
    }
}

@keyframes spin {
    from{
        transform: rotate(0deg);
    }
    
    to{
        transform: rotate(360deg);
    }
}
</style>