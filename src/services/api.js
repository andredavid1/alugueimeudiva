import axios from 'axios';

const URL_BASE_BACKEND = window.location.hostname.includes('localhost')
    ? 'http://localhost:3333'
    : 'https://melissa-server.herokuapp.com';

const api = axios.create({
    baseURL: URL_BASE_BACKEND,
});

export default api;
