import axios from 'axios';
//const baseURL = 'https://sleepy-oasis-49486.herokuapp.com/api';

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://sleepy-oasis-49486.herokuapp.com')
  : (baseURL = 'http://localhost:3000');

const SERVICE = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  signup: async (user) => {
    return await SERVICE.post('/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('/login', user);
  },
  logout: async () => {
    return await SERVICE.get('/logout');
  },
  update: async (user) => {
    return await SERVICE.put('/update', user);
  },
  confirm: async(confirmationcode) => {
    return await SERVICE.get(`/confirm/${confirmationcode}`)
  }
};

export default AUTH_SERVICE;