<template>
    <div class="layout">
        <nav-menu></nav-menu>
        <div class="layout-content">
            <div class="layout-content-header">
                <nav-header></nav-header>
            </div>
            <div class="layout-content-content">
                <router-view></router-view>
            </div>
        </div>
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
        .layout-content {
            flex: 1;
            width: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            .layout-content-header {
                flex-shrink: 0;
            }
            .layout-content-content {
                flex: 1;
                background-color: $background-color;
            }
        }
    }
</style>
