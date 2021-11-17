import api from '../utils/axios';
import { SUBMIT_USER_SUBSCRIPTION, SUBMIT_ASSOCIATION_SUBSCRIPTION } from '../actions/signup';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware', action);
  // const user = JSON.parse(localStorage.getItem('user'));

  switch (action.type) {
    case SUBMIT_USER_SUBSCRIPTION:
      console.log('on va envoyer la requête à l\'API');

      api.post(
        // URL
        '/api/v1/subscription/account/new',
        // paramètres
        {
          username: store.getState().signupUser.username,
          password: store.getState().signupUser.password,
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case SUBMIT_ASSOCIATION_SUBSCRIPTION:
      console.log('on va envoyer la requête post à l\'API');

      api.post(
        // URL
        '/api/v1/subscription/account/association/infos',
        // paramètres
        {
          // associationName: store.getState().signupAssociation.associationName,
          // presidentName: store.getState().signupAssociation.presidentName,
          // presidentFirstName: store.getState().signupAssociation.presidentFirstName,
          // associationAddress: store.getState().signupAssociation.associationAddress,
          // associationZipCode: store.getState().signupAssociation.associationZipCode,
          // associationTown: store.getState().signupAssociation.associationTown,

          name: store.getState().signupAssociation.name,
          presidentLastName: store.getState().signupAssociation.presidentLastName,
          presidentFirstName: store.getState().signupAssociation.presidentFirstName,
          address: store.getState().signupAssociation.address,
          phoneNumber: store.getState().signupAssociation.phoneNumber,
        },
      )
        .then((response) => {
          console.log(response);
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
