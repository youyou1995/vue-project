import Vue from 'vue';
import Router from 'vue-router';

import homeRouter from './modules/home.js';

Vue.use(Router);

const routes = [
  // {path: '/', redirect: '/shop', hidden: true},
  homeRouter,
  // {path: '*', redirect: '/', hidden: true},
]

const router = new Router({
  routes
})
export default router
