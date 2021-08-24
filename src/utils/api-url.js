const BASE_URL = `${process.env.VUE_APP_BASE_URL}/api/${process.env.VUE_APP_API_VERSION}`;

// Auth
const BASE_AUTH_URL = 'auth';
export const API_AUTH = {
    REGISTER: `${BASE_URL}/${BASE_AUTH_URL}/register`
};

// News
const BASE_NEWS_URL = 'news';
export const API_NEWS = {
    LIST: `${BASE_URL}/${BASE_NEWS_URL}`,
    DETAIL: (id) => `${BASE_URL}/${BASE_NEWS_URL}/${id}`
};
