import Vue from 'vue';
import Router from 'vue-router';

import Admin from '../views/admin/index.vue';

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/index',
            name: 'admin',
            component: Admin,
            children: [
                {
                    path: '/index',
                    component: () => import('../views/index/index.vue')
                },
                {
                    path: '/chart',
                    component: () => import('../views/chart/index.vue')
                },
                {
                    path: '/icon',
                    component: () => import('../views/icon/index.vue')
                },
                {
                    path: '/map',
                    component: () => import('../views/map/index.vue')
                }
            ]
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     if (to.path !== '/admin') {
//         next('/admin');
//         return;
//     }
//     next();
// });

export default router;
