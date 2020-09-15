/**
 * 注册全局组件
 */
import Vue from 'vue';

let paths = require.context('./global', false, /\/.*\.vue$/);
paths.keys().forEach(item => {
    const componentConfig = paths(item);
    const component = componentConfig.default || componentConfig;
    Vue.component(component.name, component);
});
