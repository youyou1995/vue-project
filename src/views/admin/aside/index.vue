<template>
    <div class="aside">
        <nav-menu></nav-menu>
    </div>
</template>

<script>
    import NavMenu from './nav-menu';

    export default {
        name: "admin-aside",
        data() {
            return {};
        },
        components: {NavMenu}
    };
</script>

<style scoped>

</style>
