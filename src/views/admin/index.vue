<template>
    <div class="admin">
        <!--aside-->
        <admin-aside class="admin-aside"></admin-aside>
        <!--header-->
        <!--        <admin-header class="admin-header"></admin-header>-->
        <!--content-->
        <!--        <admin-content class="admin-content"></admin-content>-->
    </div>

</template>

<script>
    import AdminAside from './aside/index';

    export default {
        name: "index",
        components: {AdminAside}
    }
</script>

<style lang="less">
    .admin {
        .admin-aside {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            width: 210px !important;
            height: 100%;
            overflow: hidden;
        }
    }
</style>
