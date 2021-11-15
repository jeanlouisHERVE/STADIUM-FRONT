import axios from 'axios';
// import { useLocation } from 'react-router-dom';
import { GET_ASSOCIATION_INFORMATIONS, saveAssociation } from '../actions/superadmin';

const superAdminMiddleware = (store) => (next) => (action) => {
  // const path = useLocation();

  switch (action.type) {
    case GET_ASSOCIATION_INFORMATIONS:

      // axios.get(`https://sym-stadium.herokuapp.com/api/v1${path.pathname}`)
      // axios.get('https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/associations/')
      // axios.get('http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1/backoffice/superadmin/associations/')
        .then((response) => {
          // console.log(response);

          // on veut enregistrer response.data dans le state => c'est les reducers
          // qui permettent de mettre à jour le state => les reducers choisissent
          // leur traitement en fonction d'une action
          store.dispatch(saveAssociation(response.data));

          // si on veut faire un deuxième traitement dans le state à ce moment,
          // on peut soit rajouter une nouvelle action (si l'intention de la première
          // action ne correspond pas au nouveau traitement), soit se servir de l'action
          // déjà en place
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default superAdminMiddleware;
