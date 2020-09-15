export default {
    namespaced: true,
    state: {
        menus: [],
    },
    mutations: {
        setMenus(state, menus) {
            state.menus = menus;
        }
    }
}
