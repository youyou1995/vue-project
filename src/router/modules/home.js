import Layout from '@/views/layout/index.vue';

export default {
    name: '首页',
    component: Layout,
    path: '/',
    redirect: '/home',
    meta: {
        name: '首页'
    },
    show: false, // 是否显示
    children: [
        {
            name: '首页',
            component: () => import('@/views/home/index.vue'),
            path: '/home',
            meta: {
                id: 'home',
                name: '首页',
            }
        }
    ]
};
