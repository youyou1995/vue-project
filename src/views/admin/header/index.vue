<template>
    <div class="admin-header">
        <div class="navbar">
            <div class="icon">
                <i class="el-icon-s-operation"></i>
            </div>
            <el-breadcrumb separator="/" class="breadcrumb">
                <el-breadcrumb-item :to="{ path: currentRoute.path }">{{current.title}}</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="action">

            </div>
        </div>
        <tab-view></tab-view>
    </div>

</template>

<script>
    import TabView from './tab-view/index';
    import {mapGetters} from 'vuex';

    export default {
        name: "index",
        data() {
            return {
                currentRoute: {}
            };
        },
        components: {TabView},
        computed: {
            ...mapGetters([
                'current'
            ])
        },
        watch: {
            'current.name'() {
                this.currentRoute = this.$router.currentRoute;
            }
        }
    };
</script>

<style scoped lang="less">
    .admin-header {
        .navbar {
            height: 50px;
            overflow: hidden;

            .icon {
                float: left;
                font-size: 25px;
                cursor: pointer;
                line-height: 50px;
            }

            .breadcrumb {
                float: left;
                line-height: 50px;
                padding-left: 10px;
            }

            .action {
                float: right;
            }
        }
    }
</style>
