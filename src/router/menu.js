/***
 * 获取menus
 * [{
 *     meta: {name: ''},
 *     path: ''
 * }]
 */
import store from '@/store';

let paths = require.context('./modules', false, /\/.*\.js$/); // 获取模块的全部js
let menus = []; // 所有模块的配置集合

paths.keys().forEach(item => {
    let def = paths(item).default;
    if (def?.isShow === false) {
        menus.push(getMenuItem(def.children)[0]);
    } else {
        menus.push(getMenuItem([def])[0]);
    }
});

store.commit('menus/setMenus', menus);

// 获取当前menu
function getMenuItem(list, res = []) {
    list.forEach((item, index) => {
        let data = {
            path: item.path,
            ...item.meta
        }
        res.push(data);
        if (item.children) {
            res[index].children = [];
             getMenuItem(item.children, res[index].children);
        }
    });
    return res;
}
