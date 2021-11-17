//* Dans utils export de la const api qu'on importera pour chaque appel axios
//* api.post par exemple

import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token'));
const api = axios.create({
  baseURL: 'http://ec2-54-197-70-206.compute-1.amazonaws.com',
});

if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default api;
