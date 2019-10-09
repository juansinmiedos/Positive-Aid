import axios from 'axios';
let baseURL = 'http://localhost:3000/api';

// process.env.NODE_ENV === 'production'
//   ? (baseURL = 'https://sleepy-oasis-49486.herokuapp.com')
//   : (baseURL = 'http://localhost:3000');

const SERVICE = axios.create({ withCredentials: true, baseURL });

const LABS_SERVICE = {
  addLabs: async (labs) => {
    return await SERVICE.post('/labs', labs);
  },
  getLabs: async (userid) => {
    return await SERVICE.get('/labs', userid)
  },

//   THIS ARE STILL TO BE PROVEN TO WORK
  updateLabs: async (labs) => {
    return await SERVICE.put('/labs', labs)
  },
  deleteLabs: async (labsid) => {
    return await SERVICE.delete('/labs', {data : {labsid}})
  }
};

export default LABS_SERVICE;