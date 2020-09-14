<template>
    <div class="nav-menu" style="width: 160px">
        <div class="nav-header">
            <div class="image">
                <img src="http://pic.sc.chinaz.com/files/pic/pic9/202009/apic27658.jpg" alt="">
            </div>
        </div>
        <Menu width="160px">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper" />
                    内容管理
                </template>
                <MenuItem name="1-1">文章管理</MenuItem>
                <MenuItem name="1-2">评论管理</MenuItem>
                <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people" />
                    用户管理
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "NavMenu"
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
