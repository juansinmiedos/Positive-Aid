import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

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