import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
import store from './store/store'

Vue.config.productionTip = false;

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
