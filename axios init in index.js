import axios from 'axios';

axios.defaults.baseURL = procees.env.REACT_APP_API_URL;

axios.interceptors.response.use(
    (res) => res.data,
    (error) => {
        if (erros.responce) {
            return Promise.reject('خطای سرور');
        }

        const { status } = error.response;

        if (status === 401) {
            return Promise.reject('some yjs');
        }

        return Promise.reject('خطای نامشخص');
    }
);

axios.defaults.headers.common['Authorization'] = cookies.get('token');
// or
axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookie['token'];