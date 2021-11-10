import axios from 'axios';
import { SUBMIT_LESSON } from '../actions/lesson';

// middleware : ça provient de la bibliothèque redux (pas react-redux)
// du coup on a accès seulement aux méthodes basiques du store, dont getState()
// qui permet de récupérer le state actuel

const lessonMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware', action);
  const state = store.getState();

  switch (action.type) {
    case SUBMIT_LESSON:
      console.log('on va envoyer la requête à l\'API');
      axios.post(
        // URL
        'http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1/backoffice/superadmin/lessons',
        // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/lessons',
        // paramètres
        {
          level: state.event.level,
          startTime: state.event.startTime,
          endTime: state.event.endTime,
          day: Number(state.event.day),
          place: state.event.place,
          activity: Number(state.event.activity),
        },
      )
        .then((response) => {
          console.log(response);
          // on veut traiter la réponse en modifiant le state => dispatch une action
          // qui sera traitée par le reducer
          // const actionSuccess = successLogin(response.data.pseudo);
          // store.dispatch(actionSuccess);
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

export default lessonMiddleware;
