import axios from '../axios';

export const authService = {
  login: (params) => axios.post('/login', params),
  registration: (params) => axios.post('/registration', params),
  getUser: () => axios.get('/user'),
};
