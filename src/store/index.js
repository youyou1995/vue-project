import Vue from 'vue';
import Vuex from 'vuex';
import tab from './modules/tab';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tab
    },
    strict: process.env.NODE_ENV !== 'production'
});
