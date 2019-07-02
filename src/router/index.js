import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/admin',
            name: 'admin',
            component: () => import('../views/admin/index.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.path !== '/admin') {
        next('/admin');
        return;
    }
    next();
});

export default router;
