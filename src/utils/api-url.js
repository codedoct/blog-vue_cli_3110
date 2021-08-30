const BASE_URL = `${process.env.VUE_APP_BASE_URL}/api/${process.env.VUE_APP_API_VERSION}`;

// Auth
const BASE_AUTH_URL = 'auth';
export const API_AUTH = {
    REGISTER: `${BASE_URL}/${BASE_AUTH_URL}/register`,
    LOGIN: `${BASE_URL}/${BASE_AUTH_URL}/login`,
    LOGOUT: `${BASE_URL}/${BASE_AUTH_URL}/logout`
};

// Profile
const BASE_PROFILE_URL = 'user';
export const API_USER = {
    PROFILE: `${BASE_URL}/${BASE_PROFILE_URL}/profile`
};

// News
const BASE_NEWS_URL = 'news';
export const API_NEWS = {
    LIST: `${BASE_URL}/${BASE_NEWS_URL}`,
    DETAIL: (id) => `${BASE_URL}/${BASE_NEWS_URL}/${id}`
};
