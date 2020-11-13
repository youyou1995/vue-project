<template>
    <i :class="['iconfont',  icon]" :style="{fontSize: `${fontSize}px`, color: color}"></i>
</template>

<script>
    export default {
        name: "YIcon",
        props: {
            icon: {
                type: String,
                required: true
            },
            fontSize: {
                type: Number,
                default: 12
            },
            color: {
                type: String,
                default: '#909399'
            }
        }
    };
</script>

<style scoped>

</style>
