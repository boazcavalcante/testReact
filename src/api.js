import axios from 'axios';

const api = axios.create({
  baseURL: 'https://boaz-server.herokuapp.com',
});

export default api;