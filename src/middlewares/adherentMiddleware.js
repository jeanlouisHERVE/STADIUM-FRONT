import axios from 'axios';
import { SUBMIT_ADHERENT } from '../actions/adherent';

const adherentMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case SUBMIT_ADHERENT:
      console.log('on va envoyer la requête à l\'API');
      axios.post(
        // URL
        'http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1/backoffice/superadmin/profiles',
        // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/events',
        // paramètres
        {
          firstname: state.adherent.firstname,
          lastname: state.adherent.lastname,
          picture: state.adherent.picture,
          accountId: Number(state.adherent.accountId),
          association: Number(state.adherent.association),
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
          // TODO mettre en place une nouvelle action (par exemple ERROR_LOGIN),
        });

      break;

    default:
  }
  next(action);
};

export default adherentMiddleware;
