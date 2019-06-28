<template>
    <el-menu default-active="1-4-1"
             :collapse="isCollapse"
             :default-active="defaultActive"
             @select="handleSelect"
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
    import MenuItem from './menu-item';
    import Vue from 'vue';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "menu",
        data() {
            return {
                menuArr: menuData,
                isCollapse: false,
                defaultActive: ''
            };
        },
        components: {MenuItem},
        computed: {
            ...mapGetters([
                'current',
                'tabs'
            ])
        },
        methods: {
            registerComponent() {
                menuData && menuData.length > 0 && menuData.forEach(menu => {
                    if (!menu.children || menu.children.length === 0) {
                        Vue.component(`y-${menu.name}`, () => import(`../../../${menu.path}${menu.component}.vue`));
                    }
                });
            },
            handleSelect(name) {
                console.log('menu', name, this.current, this.tabs);
                let isOpen = false;
                this.tabs.forEach(tab => {
                    // 判断是tab中是否存在
                    if (tab.name === name) {
                        isOpen = true;
                        this.updateCurrent(tab);
                    }
                });
                if (!isOpen) {
                    this.dealMenu(menuData, name);
                }
            },
            // 进行store中tab的添加
            dealMenu(menuDate, name) {
                for (let menu of menuData) {
                    if (!menu.children || menu.children.length <= 0) {
                        if (!name) {
                            this.defaultActive = menu.name;
                            this.addTabs(menu);
                        } else if (name && menu.name === name) {
                            this.addTabs(menu);
                            break;
                        }
                    } else {
                        this.dealMenu(menu.children, name);
                    }
                }
            },
            ...mapActions([
                    'addTabs',
                    'updateCurrent',
                    'addMenus'
                ]
            )
        },
        mounted() {
            this.registerComponent();
            this.addMenus(this.menuArr);
            // 默认打开第一个
            if (!this.current) {
                this.dealMenu(this.menuArr[0]);
            }
        }
    };
</script>

<style scoped>

</style>
