import axios from 'axios';
import { logoutUser } from '@/utils/auth';

export default function setup() {
    // Add a response interceptor
    axios.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        //catches if the session ended!
        if (error.response && error.response.status === 401) {
            setTimeout(() => {
                logoutUser();
            }, 2000);
        }
        return Promise.reject(error);
    });
}
