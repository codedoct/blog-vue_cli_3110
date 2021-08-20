import Vue from 'vue';
import { apiGetNonAuth } from '@/utils/api';
import { API_NEWS } from '@/utils/api-url';

const state = {
    news: {meta:{},docs:[]}
};

const mutations = {
    "SET_NEWS": (state, payload) => {
        Vue.set(state, 'news', payload);
    }
};

const actions = {
    async getNews(context, data) {
        try {
            const response = await apiGetNonAuth(API_NEWS.LIST, data);
            context.commit('SET_NEWS', response.data.result);
        } catch (err) {
            console.log(err);
        }
    }
};

const getters = {
    news: state => {
        return state.news;
    }
};

const namespaced = true;
export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
};
