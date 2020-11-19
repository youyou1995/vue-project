/**
 * 进行全局组件的注册
 * 将components 中 global文件夹中的组件进行全局注册
 *  组件的名称就是组件引用的名字，注意不要进行重复的命名
 *  将组件的name必须填写，且名称为文件的名称
 */

import Vue from 'vue';

const requireComponent = require.context('./', true, /\.vue$/);

requireComponent.keys().forEach(key => {
    const componentConfig = requireComponent(key);
    const component = componentConfig.default || componentConfig;
    Vue.component(component.name, component);
});
