<template>
    <el-submenu :index="data.name"
                v-if="data.children && data.children.length > 0"
    >
        <template slot="title">
            <i :class="['iconfont', data.icon]"></i>
            <span slot="title">{{data.title}}</span>
        </template>
        <menu-item :data="child"
                   :key="child.name"
                   v-for="child in data.children"
        >
        </menu-item>
    </el-submenu>
    <el-menu-item :index="data.name" v-else>
        <i :class="['iconfont', data.icon]"></i>
        {{data.title}}
    </el-menu-item>
</template>

<script>
    export default {
        name: "menuItem",
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style scoped>

</style>
