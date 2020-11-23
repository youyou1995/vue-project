import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import './menus/index';
import ViewUI from 'view-design';
// 组件
import './components/index';
import api from '@/api/index'
//css
import 'view-design/dist/styles/iview.css';
import './assets/css/iconfont/iconfont.css';
import './assets/css/reset.scss'

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(ViewUI, {
    transfer: true
});
new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
