import * as Cookies from 'js-cookie';
import router from '@/router';

export const setCookie = (token, profile) => {
    const stringProfile = JSON.stringify({
        name: profile.name,
        address: profile.address
    });
    Cookies.set('blog-token', token, { path: '/' });
    Cookies.set('blog-profile', stringProfile, { path: '/' });
    return {
        token: token,
        profile: profile
    };
};

export const getUserToken = () => {
    return Cookies.get('blog-token');
};

export const getUserProfile = () => {
    const profileCookies = Cookies.get('blog-profile');
    const jsonProfile = JSON.parse(profileCookies);
    return jsonProfile;
};

export const isLogin = () => {
    const token = Cookies.get('blog-token');
    if (token) {
        return true;
    }
    return false;
};

export const logoutUser = () => {
    Cookies.remove('blog-token', { path: '/' });
    Cookies.remove('blog-profile', { path: '/' });
    router.go(0);
};
