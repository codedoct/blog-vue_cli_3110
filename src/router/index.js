import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminLayout from '@/components/layouts/Admin';
import Home from '@/views/Home.vue';
import { isLogin } from '@/utils/auth';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            public: true,
            onlyWhenLoggedOut: false
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {
            public: true,
            onlyWhenLoggedOut: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
        meta: {
            public: true,
            onlyWhenLoggedOut: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
        meta: {
            public: true,
            onlyWhenLoggedOut: true
        }
    },
    {
        path: '/admin',
        component: AdminLayout,
        redirect: '/admin/news',
        children: [
            {
                path: 'profile',
                name: 'Profile',
                component: () => import(/* webpackChunkName: "profile" */ '@/views/admin/Profile.vue')
            },
            {
                path: 'news',
                name: 'News',
                component: () => import(/* webpackChunkName: "news" */ '@/views/admin/News.vue')
            },
            {
                path: 'news/:id',
                name: 'Detail News',
                component: () => import(/* webpackChunkName: "news-detail" */ '@/views/admin/NewsDetail.vue')
            },
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "notfound" */ '@/views/NotFound'),
        meta: {
            public: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
    const loggedIn = isLogin();
  
    if (!isPublic && !loggedIn) {
        return next({
            path:'/login',
            query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
        });
    }
  
    // Do not allow user to visit login page or register page if they are logged in
    if (loggedIn && onlyWhenLoggedOut) {
        return next('/admin');
    }
  
    next();
});

export default router;
