// 组件全局注册

import Vue from 'vue';

const requireComponent = require.context('./', true, /\.vue$/);

requireComponent.keys().forEach(key => {
    const componentConfig = requireComponent(key);
    const component = componentConfig.default || componentConfig;
    Vue.component(component.name, component);
});
