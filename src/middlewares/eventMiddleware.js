import api from '../utils/axios';
import { SUBMIT_EVENT, DELETE_EVENT } from '../actions/event';

// middleware : ça provient de la bibliothèque redux (pas react-redux)
// du coup on a accès seulement aux méthodes basiques du store, dont getState()
// qui permet de récupérer le state actuel

const eventMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware', action);
  const state = store.getState();

  switch (action.type) {
    case DELETE_EVENT:
      console.log(action.eventId);
      api.delete(
        // URL
        `/api/v1/backoffice/superadmin/events/${action.eventId}`,
        // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/events',
        // paramètres
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

    case SUBMIT_EVENT:
      console.log('on va envoyer la requête à l\'API');
      api.post(
        // URL
        '/api/v1/backoffice/superadmin/events',
        // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/events',
        // paramètres
        {
          name: state.event.name,
          startDate: state.event.startDate,
          schedule: state.event.schedule,
          endDate: state.event.endDate,
          place: state.event.place,
          maxParticipants: Number(state.event.maxParticipant),
          association: Number(state.event.association),
        },
      )
        .then((response) => {
          console.log(response.data.token);
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

export default eventMiddleware;
