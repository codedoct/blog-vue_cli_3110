import { apiPostNonAuth } from '@/utils/api';
import { API_AUTH } from '@/utils/api-url';
import { notificationDanger, notificationSuccess } from '@/utils/notification';

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
            await apiPostNonAuth(API_AUTH.LOGIN, data);
            notificationSuccess("Login berhasil");
        } catch (err) {
            notificationDanger(err);
            throw err;
        }
    }
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
