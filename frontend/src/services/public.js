import axios from 'axios';
let baseURL = 'http://localhost:3000/api';

// process.env.NODE_ENV === 'production'
//   ? (baseURL = 'https://sleepy-oasis-49486.herokuapp.com')
//   : (baseURL = 'http://localhost:3000');

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