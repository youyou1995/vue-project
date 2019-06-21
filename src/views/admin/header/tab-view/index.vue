<template>
    <div class="tab">
        <div class="tab-wrapper">
            <transition-grop name="fade">
                <template v-if="tabData && tabData.length > 0"
                >
                    <el-tag :closable="tab.closable"
                            v-for="tab in tabData"
                            :key="tab.name"
                    >
                        <i :class="['iconfont', tab.icon]"></i>
                        {{tab.title}}
                    </el-tag>
                </template>
            </transition-grop>
        </div>
    </div>
</template>

<script>
    import tabData from '../../../../assets/js/data/menu';

    export default {
        name: "index",
        data() {
            return {
                tabData: tabData
            };
        }
    };
</script>

<style scoped>

</style>
