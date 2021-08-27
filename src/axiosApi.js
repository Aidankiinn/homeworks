import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://aidanazhumak-default-rtdb.firebaseio.com'
});

export default axiosApi;