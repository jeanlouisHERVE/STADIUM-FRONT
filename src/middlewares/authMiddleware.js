import axios from 'axios';
import { SUBMIT_LOGIN, successLogin } from '../actions/login';

// middleware : ça provient de la bibliothèque redux (pas react-redux)
// du coup on a accès seulement aux méthodes basiques du store, dont getState()
// qui permet de récupérer le state actuel

//* Dans utils export de la const api qu'on importera pour chaque appel axios
//* api.post par exemple
// const api = axios.create({baseUrl: 'http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1'} );

// let user = JSON.parse(localStorage.getItem('user'))

// if(user && user.token) {
//   api.defaults.headers.Authorization = `Bearer ${user.token}`
// }

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

const authMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware', action);
  // const user = JSON.parse(localStorage.getItem('user'));

  switch (action.type) {
    case SUBMIT_LOGIN:
      console.log('on va envoyer la requête à l\'API');

      // const state = store.getState();
      // => state.email, state.password

      axios.post(
        // URL
        'http://ec2-54-197-70-206.compute-1.amazonaws.com/api/login_check',
        // { headers:
        //   const user = JSON.parse(localStorage.getItem('user'));

        //   if (user && user.token) {
        //     return { 'Authorization': 'Bearer ' + user.token };
        //   } else {
        //     return {};
        //   }
        // }
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
          console.log(response);
          // on veut traiter la réponse en modifiant le state => dispatch une action
          // qui sera traitée par le reducer
          // const actionSuccess = successLogin(response.data.pseudo);
          store.dispatch(successLogin(response.data));
        })
        .catch((error) => {
          console.warn(error);
          // TODO mettre en place une nouvelle action (par exemple ERROR_LOGIN),
          // qui serait traitée par le reducer
          // On aurait une case dans le state pour piloter l'affichage d'un
          // message d'erreur sur l'application
        });

      break;

    default:
  }

  // on transmet l'action au suivant : le middleware suivant, ou le reducer
  next(action);
};

export default authMiddleware;
