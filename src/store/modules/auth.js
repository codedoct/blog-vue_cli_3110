import { apiPostNonAuth, apiPostAuth } from '@/utils/api';
import { API_AUTH } from '@/utils/api-url';
import { notificationDanger, notificationSuccess } from '@/utils/notification';
import { setCookie, logoutUser } from '@/utils/auth';
import router from '@/router';

const state = {};

const mutations = {};

const actions = {
    async register(context, data) {
        try {
            await apiPostNonAuth(API_AUTH.REGISTER, data);
            notificationSuccess("Register berhasil silahkan login");
        } catch (err) {
            notificationDanger(err);
            throw err;
        }
    },
    async login(context, data) {
        try {
            const response = await apiPostNonAuth(API_AUTH.LOGIN, data);
            setCookie(response.data.token, response.data.result);
            notificationSuccess("Login berhasil");
            setTimeout(() => {
                router.go(0);
            }, 1000);
        } catch (err) {
            notificationDanger(err);
            throw err;
        }
    },
    async logout() {
        try {
            await apiPostAuth(API_AUTH.LOGOUT);
            notificationSuccess('Logout Success');
            setTimeout(() => {
                logoutUser();
            }, 1000);
        } catch (err) {
            notificationDanger(err);
        }
    },
};

const getters = {};

const namespaced = true;
export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
};
