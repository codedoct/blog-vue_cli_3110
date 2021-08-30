import axios from 'axios';
import { METHOD } from './constant';
import { getUserToken } from '@/utils/auth';

export const apiGetNonAuth = (URL, params) => axios({
    url: URL,
    method: METHOD.GET,
    params
});

export const apiPostNonAuth = (URL, data) => axios({
    url: URL,
    method: METHOD.POST,
    data
});
export const apiPostAuth = (URL, data) => axios({
    url: URL,
    method: METHOD.POST,
    data,
    headers: {
        Authorization: getUserToken()
    }
});

