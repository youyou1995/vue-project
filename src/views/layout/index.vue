<template>
    <div class="layout">
        <nav-menu></nav-menu>
        <nav-header></nav-header>
    </div>
</template>

<script>
    import NavMenu from "./components/NavMenu";
    import NavHeader from "./components/NavHeader";

    export default {
        name: "index",
        components: {
            NavMenu,
            NavHeader
        }
    };
</script>

<style scoped lang="scss">
    .layout {
        display: flex;
    }
</style>
