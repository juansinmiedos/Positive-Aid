import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const PUBLIC_SERVICE = {
  capacits: async() => {
    return await SERVICE.get('/capacits')
  },
  medicines: async() => {
    return await SERVICE.get('/medicines')
  }
};

export default PUBLIC_SERVICE;