import axios from 'axios';

const api = axios.create({
    baseURL: 'https://onministack-backend.herokuapp.com'
}); 

export default api;