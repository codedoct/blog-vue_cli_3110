import Vue from 'vue';
import Vuex from 'vuex';
import news from './modules/news';
import auth from './modules/auth';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    modules: {
        news,
        auth
    },
});
