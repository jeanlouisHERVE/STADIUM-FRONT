// import axios from 'axios';
import { SUBMIT_LOGIN, successLogin } from '../actions/login';
import api from '../utils/axios';

// middleware : ça provient de la bibliothèque redux (pas react-redux)
// du coup on a accès seulement aux méthodes basiques du store, dont getState()
// qui permet de récupérer le state actuel

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      console.log('on va envoyer la requête à l\'API');

      // const state = store.getState();
      // => state.email, state.password

      api.post(
        // URL
        '/api/login_check',
        // paramètres
        {
          username: store.getState().login.username,
          password: store.getState().login.password,
        },
      )
        .then((response) => {
          console.log(response.data.token);
          api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

          if (response.data.token) {
            localStorage.setItem('token', JSON.stringify(response.data.token));
          }

          // console.log(response);
          store.dispatch(successLogin(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    default:
  }

  // on transmet l'action au suivant : le middleware suivant, ou le reducer
  next(action);
};

export default authMiddleware;
