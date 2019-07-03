import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router/index';
import './plugins/element.js';
import store from './store/index';
// 组件
import './components/index';
//css
import './assets/css/iconfont/iconfont.css';

Vue.config.productionTip = false;

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
