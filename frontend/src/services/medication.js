import axios from 'axios';
let baseURL = 'https://sleepy-oasis-49486.herokuapp.com/api';

// process.env.NODE_ENV === 'production'
//   ? (baseURL = 'https://sleepy-oasis-49486.herokuapp.com')
//   : (baseURL = 'http://localhost:3000');

const SERVICE = axios.create({ withCredentials: true, baseURL });

const MEDICATION_SERVICE = {
  addMedication: async (medication) => {
    return await SERVICE.post('/medication', medication);
  },
  getMedication: async (userid) => {
    return await SERVICE.get('/medication', userid)
  },

//   THIS ARE STILL TO BE PROVEN TO WORK
  updateMedication: async (medication) => {
    return await SERVICE.put('/medication', medication)
  },
  deleteMedication: async (medicationid) => {
    return await SERVICE.delete('/medication', {data : {medicationid}})
  }
};

export default MEDICATION_SERVICE;