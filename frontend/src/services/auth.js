import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

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
  addLabs: async (labs) => {
    return await SERVICE.post('/labs', labs);
  },
  getLabs: async (userid) => {
    return await SERVICE.get('/labs', userid)
  },
  capacits: async() => {
    return await SERVICE.get('/capacits')
  },
  medicines: async() => {
    return await SERVICE.get('/medicines')
  }
};

export default AUTH_SERVICE;