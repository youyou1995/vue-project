<template>
    <div class="tab" ref="tab">
        <div ref="wrapper" class="tab-wrapper" :style="{transform: `translateX(${bodyLeft})px`}">
            <transition-grop name="fade">
                <template v-if="tabData && tabData.length > 0"
                >
                    <el-tag :ref="`tab_${tab.name}`" :closable="tab.closable"
                            v-for="tab in tabData"
                            :key="tab.name"
                            @click="handleSelect(tab)"
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
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "index",
        data() {
            return {
                tabData: tabData,
                bodyLeft: 0
            };
        },
        computed: {
            ...mapGetters('tab', [
                'current',
                'tabs'
            ])
        },
        watch: {
            current(val) {
                this.$nextTick(() => {
                    let tabElement = this.$refs[`tab_${val}`];
                    if (tabElement && tabElement.length > 0) {
                        this.tabScroll(tabElement);
                    }
                });
            }
        },
        methods: {
            handleSelect(tab) {
                console.log('tab', tab, this.$refs[`tab_${tab.name}`][0]);
                if (this.current.name !== tab.name) {
                    this.updateCurrent(tab);
                }
            },
            tabScroll(tabElement) {
                console.log('tab', tabElement, tabElement.offsetLeft);
                let tabWidth = this.$refs['tab'].offsetWidth;
                if (tabElement.offsetLeft < (tabWidth - tabElement.offsetWidth)) {
                    this.bodyLeft = 0;
                }
                // 滚动的左侧区域,移动到最右边
                else if (tabElement.offsetLeft < -this.bodyLeft) {
                    this.bodyLeft = -tabElement.offsetLeft;
                }
                // 滚动到右侧区域
                else if (tabElement.offsetLeft > -this.bodyLeft) {
                    this.bodyLeft = -(tabElement.offsetLeft - (tabWidth - tabElement.offsetWidth));
                }
            },
            ...mapActions('tab', [
                'updateCurrent'
            ])
        }
    };
</script>

<style lang="less">
    .tab {
        position: relative;
        overflow: hidden;
        height: 40px;
        background-color: #f0f0f0;

        .tab-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            white-space: nowrap;
            height: 32px;
            padding: 4px;

            .el-tag {
                background-color: #fff;
                border-color: #fff;
                color: #000;
                margin-right: 5px;
                cursor: pointer;

                i {
                    padding-right: 5px;
                }
            }
        }
    }
</style>
