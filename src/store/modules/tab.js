const state = {
    current: {},
    tabs: []
};

const getters = {
    current: state => state.current,
    tabs: state => state.tabs
};

const mutations = {
    addTabs: (state, payload) => {
        state.tabs.push(payload);
    },
    updateCurrent: (state, payload) => {
        state.current = payload;
    },
    delTabs: (state, payload) => {
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
        commit('addTabs', payload);
        commit('updateCurrent', payload);
    },
    updateCurrent({commit}, payload) {
        commit('updateCurrent', payload);
    }
};

export default {
    namespaced: true, // 使用命名空间后再使用map时需要指出是哪一个store的模块的变量或者方法
    state,
    getters,
    mutations,
    actions
};
