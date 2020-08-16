import axios from 'axios';

const api = axios.create({
    baseURL: 'https://melissa-server.herokuapp.com/',
});

export default api;
