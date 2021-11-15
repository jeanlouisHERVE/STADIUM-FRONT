import { SUBMIT_LOGIN, successLogin } from '../actions/login';
import axiosConfig from '../utils/axios';

// middleware : ça provient de la bibliothèque redux (pas react-redux)
// du coup on a accès seulement aux méthodes basiques du store, dont getState()
// qui permet de récupérer le state actuel

const authMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware', action);
  // const user = JSON.parse(localStorage.getItem('user'));

  switch (action.type) {
    case SUBMIT_LOGIN:
      console.log('on va envoyer la requête à l\'API');

      axiosConfig.post(
        // URL
        '/login_check',
        // paramètres
        {
          username: store.getState().login.username,
          password: store.getState().login.password,
          userAuthentified: store.getState().login.userAuthentified,
        },
      )
        .then((response) => {
          console.log(response.data.token);

          if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.token));
          }

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
