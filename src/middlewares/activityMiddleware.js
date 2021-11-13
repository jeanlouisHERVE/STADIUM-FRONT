import axios from 'axios';
import { SUBMIT_ACTIVITY } from '../actions/activity';

const activityMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case SUBMIT_ACTIVITY:
      console.log('on va envoyer la requête à l\'API');
      axios.post(
        // URL
        'http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1/backoffice/superadmin/activities',
        // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/activities',
        // paramètres
        {
          name: state.activity.name,
          picture: state.activity.picture,
          association: Number(state.activity.association),
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

export default activityMiddleware;
