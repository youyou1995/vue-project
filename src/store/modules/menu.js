const state = {
    menus: []
};

const mutations = {
    addMenus(state, payload) {
        state.menus.push(...payload);
    },
    setMenus: (state, payload) => {
        console.log('aylod', payload);
        state.menus = payload;
    }
};

const actions = {
    addMenus({commit}, payload) {
        commit('addMenus', payload);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
