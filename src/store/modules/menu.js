import *as type from './type';

const state = {
    menus: []
};

const mutations = {
    [type.ADD_MENUS]: (state, payload) => {
        state.menus.push(payload);
    }
};

const actions = {
    addMenus({commit}, payload) {
        commit([type.ADD_MENUS], payload);
    }
};

export default {
    state,
    mutations,
    actions
};
