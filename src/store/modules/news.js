import Vue from 'vue';
import { apiGetNonAuth } from '@/utils/api';
import { API_NEWS } from '@/utils/api-url';

const state = {
    news: {meta:{},docs:[]},
    news_detail: {}
};

const mutations = {
    "SET_NEWS": (state, payload) => {
        Vue.set(state, 'news', payload);
    },
    "SET_NEWS_DETAIL": (state, payload) => {
        Vue.set(state, 'news_detail', payload);
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
    },
    async getNewsDetail(context, id) {
        try {
            const response = await apiGetNonAuth(API_NEWS.DETAIL(id));
            context.commit('SET_NEWS_DETAIL', response.data.result);
        } catch (err) {
            console.log(err);
        }
    }
};

const getters = {
    news: state => {
        return state.news;
    },
    news_detail: state => {
        return state.news_detail;
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
