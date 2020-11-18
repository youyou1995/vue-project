import store from '@/store'

let paths = require.context('./modules', false, /\/.*\.js$/)

let menus = paths.keys().map(key => paths(key).default);

menus.sort((a,b) =>  a.zIndex-b.zIndex);

const filterMenus = (allList, list = []) => {
    if (allList?.length > 1) {
        allList.sort((a,b) => a.zIndex -b.zIndex);
    }
    allList.forEach(item => {
        if (item.show !== false) {
            list.push(item);
            list[list.length-1].children = [];
            if (item.children?.length) {
                filterMenus(item.children, list.children);
            }
        }
    })
    return list;
}

store.commit('menu/setMenus', filterMenus(menus));
