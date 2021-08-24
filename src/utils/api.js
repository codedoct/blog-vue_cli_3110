import axios from 'axios';
import { METHOD } from './constant';

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
