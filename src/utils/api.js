import axios from 'axios';
import { METHOD } from './constant';

export const apiGetNonAuth = (URL, params) => axios({
    url: URL,
    method: METHOD.GET,
    params
});
