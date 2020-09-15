<template>
    <div class="content-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ContentBar"
    };
</script>

<style scoped lang="scss">
    .content-bar {
        padding-top: 40px;
    }
</style>
