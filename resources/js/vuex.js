import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
    user: null,
    permissions: null,
};

const store = new Vuex.Store({
    state:{
        //permissions:[]
    },
    getters: {
        user: (state) => {
            return state.user;
        },
        permissions: (state) => {
            return state.permissions;
        }
    },
    actions: {
        user: (context, user) => {
            context.commit('user', user);
        },
        permissions: (context, permissions) => {
            context.commit('permissions', permissions);
        }
    },
    mutations: {
        user: (state, user) => {
            state.user = user;
        },
        permissions: (state, permissions) => {
            state.permissions = permissions;
        }
    },
    plugins: [createPersistedState()]
});

export default store;
