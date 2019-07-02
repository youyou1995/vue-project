<template>
    <div class="admin">
        <!--aside-->
        <admin-aside class="admin-aside"></admin-aside>
        <!--header-->
        <div class="content-right">
            <admin-header class="admin-header"></admin-header>
             <!--content-->
            <router-view></router-view>
            <!--content-->
            <!--        <admin-content class="admin-content"></admin-content>-->
        </div>

    </div>

</template>

<script>
    import AdminAside from './aside/index';
    import AdminHeader from './header/index';

    export default {
        name: "index",
        components: {AdminAside, AdminHeader}
    };
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

        .content-right {
            position: relative;
            min-height: 100%;
            margin-left: 210px;
        }
    }
</style>
