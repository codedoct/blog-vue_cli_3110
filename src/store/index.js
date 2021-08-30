import Vue from 'vue';
import Vuex from 'vuex';
import news from './modules/news';
import auth from './modules/auth';
import user from './modules/user';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    modules: {
        news,
        auth,
        user
    },
});
