import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let paths = require.context('./modules', false, /\/.*\.js$/) //获取当前全部路由
let routes = paths.keys().map(key => {
    return paths(key).default;
})

routes.unshift({
    name: '首页',
    path: '/',
    redirect: '/home',
    meta: {
        name: '首页'
    }
})
const router = new Router({
    routes
});

// router.beforeEach((to, from, next) => {
//     if (to.path !== '/admin') {
//         next('/admin');
//         return;
//     }
//     next();
// });

export default router;
