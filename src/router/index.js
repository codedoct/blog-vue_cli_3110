import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminLayout from '@/components/layouts/Admin';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Register.vue')
    },
    {
        path: '/admin',
        component: AdminLayout,
        redirect: '/admin/news',
        children: [
            {
                path: 'news',
                name: 'News',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/admin/News.vue')
            },
            {
                path: 'news/:id',
                name: 'Detail News',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/admin/NewsDetail.vue')
            },
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "notfound" */ '@/views/NotFound')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
