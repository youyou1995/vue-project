<template>
    <div class="tab" ref="tab">
        <div class="tab-prev" @click="handleScroll('left')">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="tab-next" @click="handleScroll('right')">
            <i class="el-icon-arrow-right"></i>
        </div>
        <div ref="wrapper" class="tab-wrapper" :style="{transform: `translateX(${bodyLeft})px`}">
            <!--<transition-grop name="fade">-->
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
            <!--</transition-grop>-->
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
                bodyLeft: 0,
                littleScroll: 100
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
            handleScroll(type) {
                let offsetLeft = this.$refs[`tab_${this.tab.name}`].offsetLeft;
                if (type ==='left') {
                    if (this.bodyLeft >= -this.littleScroll) {
                        this.bodyLeft = 0;
                    } else if (this.bodyLeft < -this.littleScroll) {
                        this.bodyLeft += this.littleScroll;
                    }
                } else if (type === 'right') {
                    let bodyWidth = this.$refs['wrapper'].offsetWidth,
                        tabWidth = this.$refs['tab'].offsetWidth;
                    if (this.bodyLeft <= bodyWidth - tabWidth - this.littleScroll) {
                        // this.bodyLeft = this.bodyLeft;
                    } else {
                        this.bodyLeft += this.littleScroll;
                    }
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
            left: 20px;
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
        .tab-prev,
        .tab-next {
            position: absolute;
            top: 4px;
            text-align: center;
            line-height: 32px;
            background-color: #fff;
            width: 20px;
            cursor: pointer;
        }
        .tab-prev {
            left: 0;
        }
        .tab-next {
            right: 0;
        }
    }
</style>
