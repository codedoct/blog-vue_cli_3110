import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import { store } from './store';
import interceptorsSetup from '@/configs/axios';

Vue.config.productionTip = false;
Vue.use(VeeValidate);

interceptorsSetup();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
