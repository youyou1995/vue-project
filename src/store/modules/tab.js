import * as type from '../type';

const state = {
    current: {},
    tabs: []
};

const getters = {
    current: state => state.current,
    tabs: state => state.tabs
};

const mutations = {
    [type.ADD_TABS]: (state, payload) => {
        state.tabs.push(payload);
    },
    [type.UPDATE_CURRENT]: (state, payload) => {
        state.current = payload;
    },
    [type.DEL_TABS]: (state, payload) => {
        let tabs = [];
        state.tabs.forEach(tab => {
            if (tab.name !== payload.name) {
                tabs.push(tab);
            }
        });
        state.tabs = tabs;
    }
};

const actions = {
    addTabs({commit}, payload) {
        commit([type.ADD_TABS], payload);
        commit([type.UPDATE_CURRENT], payload);
    },
    updateCurrent({commit}, payload) {
        commit([type.UPDATE_CURRENT], payload);
    }
};

export default {
    // namespaced: true, // 使用命名空间后再使用map时需要指出是哪一个store的模块的变量或者方法
    state,
    getters,
    mutations,
    actions
};
