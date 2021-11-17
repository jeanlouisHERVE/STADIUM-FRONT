import api from '../utils/axios';
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
      api.post(
        // URL
        '/api/v1/backoffice/superadmin/lessons',
        // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/lessons',
        // paramètres
        {
          level: state.lesson.level,
          startTime: state.lesson.startTime,
          endTime: state.lesson.endTime,
          day: Number(state.lesson.day),
          place: state.lesson.place,
          activity: Number(state.lesson.activity),
          association: Number(state.lesson.association),
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
