//* Dans utils export de la const api qu'on importera pour chaque appel axios
//* api.post par exemple

import axios from 'axios';

const axiosConfig = axios.create({
  baseUrl: 'http://ec2-54-197-70-206.compute-1.amazonaws.com',
});

export default axiosConfig;

// case XXX_XXX:
//   api.post(
//     baseUrl + 'login_check',
//     {
//       username: store.getState().login.username,
//       password: store.getState().login.password,
//       userAuthentified: store.getState().login.userAuthentified,
//     },
//   )

// récup le token en localStorage
// const token = storage.get('token');
