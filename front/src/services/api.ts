import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-noctua.herokuapp.com/'
});


export default api 