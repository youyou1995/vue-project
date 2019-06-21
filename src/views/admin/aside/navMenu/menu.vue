<template>
    <el-menu default-active="1-4-1"
             :collapse="isCollapse"
    >
        <menu-item :data="menu"
                   :key="menu.name"
                   v-for="menu in menuArr"
        >
        </menu-item>
    </el-menu>
</template>

<script>
    import menuData from '../../../../assets/js/data/menu';
    import MenuItem from './menuItem';

    export default {
        name: "menu",
        data() {
            return {
                menuArr: menuData,
                isCollapse: false
            }
        },
        components: {MenuItem}
    }
</script>

<style scoped>

</style>
