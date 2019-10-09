import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const APPOINTMENT_SERVICE = {
  addAppointment: async (appointment) => {
    return await SERVICE.post('/appointment', appointment);
  },
  getAppointment: async (userid) => {
    return await SERVICE.get('/appointment', userid)
  },

//   THIS ARE STILL TO BE PROVEN TO WORK
  updateAppointment: async (appointment) => {
    return await SERVICE.put('/appointment', appointment)
  },
  deleteAppointment: async (appointmentid) => {
    return await SERVICE.delete('/appointment', {data : {appointmentid}})
  }
};

export default APPOINTMENT_SERVICE;