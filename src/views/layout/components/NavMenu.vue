<template>
    <div class="nav-menu" style="width: 160px">
        <div class="nav-header">
            <div class="image">
                <img src="http://pic.sc.chinaz.com/files/pic/pic9/202009/apic27658.jpg" alt="">
            </div>
        </div>
        <Menu width="160px" :active-name="activeName" :open-names="openNames" v-if="menus">
            <template v-for="item in menus">
                <Submenu :name="item.id" v-if="item.children && item.children.length > 0" :key="item.id">
                    <template slot="title">
                        <Icon type="ios-paper"/>
                        {{item.name}}
                    </template>
                    <template v-for="child in item.children">
                        <MenuItem :key="child.id" :name="child.id" :to="item.path">
                            <Icon type="ios-paper"/>
                            {{item.name}}
                        </MenuItem>
                    </template>

                </Submenu>
                <MenuItem v-else  :key="item.id" :name="item.id" :to="item.path">
                    <Icon type="ios-paper"/>
                    {{item.name}}
                </MenuItem>
            </template>
        </Menu>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "NavMenu",
        data() {
            return {
                activeName: '',
                openNames: [],

            };
        },
        computed: {
            ...mapState('menus', {
                menus: state => state.menus
            })
        },
        mounted() {
            this.initMenus();
        },
        methods: {
            initMenus() {
                this.activeName = this.menus?.[0]?.id;
                this.openNames = this.menus?.[0]?.id? [this.menus?.[0]?.id] : [];
            }
        }
    };
</script>

<style scoped lang="scss">
    .nav-menu {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #1C2C3C;

        .nav-header {
            flex-shrink: 0;
            border-bottom: 1px solid #111216;

            .image {
                width: 100%;
                height: 60px;
                box-sizing: border-box;
                padding: 10px 16px;
                overflow: hidden;
                text-align: center;

                > img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }

        /deep/ .ivu-menu {
            flex: 1;
            overflow-y: auto;
            background-color: #1C2C3C;
            color: #ffffff;

            .ivu-menu-item {
                color: #ffffff;

                &:hover {
                    color: #2d8cf0;
                }
            }

            .ivu-menu-item-active.ivu-menu-item-selected {
                background-color: #2d8cf0;
                color: #ffffff;
            }
        }
    }
</style>
