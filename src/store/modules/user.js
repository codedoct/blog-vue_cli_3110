import Vue from 'vue';
import { apiGetAuth } from '@/utils/api';
import { API_USER } from '@/utils/api-url';
import { notificationDanger } from '@/utils/notification';

const state = {
    profile: {}
};

const mutations = {
    "SET_PROFILE": (state, payload) => {
        Vue.set(state, 'profile', payload);
    }
};

const actions = {
    async userProfile(context) {
        try {
            const response = await apiGetAuth(API_USER.PROFILE);
            context.commit('SET_PROFILE', response.data.result);
        } catch (err) {
            notificationDanger(err);
        }
    }
};

const getters = {
    profile: state => {
        return state.profile;
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
