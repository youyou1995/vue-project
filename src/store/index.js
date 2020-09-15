import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let modules = {}, moduleName = [];
let paths = require.context('./modules', false, /\/.*\.js$/);
paths.keys().map(item => {
  moduleName.push(item.replace(/(\.\/|\.js)/g, ''));
  return paths(item).default;
}).forEach((item, index) => {
  modules[moduleName[index]] = item;
})

export default new Vuex.Store({
  modules: {
    ...modules,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
