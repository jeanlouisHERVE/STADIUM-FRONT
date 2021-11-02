import axios from 'axios';
import { FETCH_ASSOCIATIONS, saveAssociationsList } from '../actions/superadmin';

const superadminMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ASSOCIATIONS:
      // console.log('il faut charger les associations');

      axios.get('http://melanie-fauchon.vpnuser.lan:8000/api/v1/backoffice/superadmin/associations/')
        .then((response) => {
          // console.log(response);

          // on veut enregistrer response.data dans le state => c'est les reducers
          // qui permettent de mettre à jour le state => les reducers choisissent
          // leur traitement en fonction d'une action
          store.dispatch(saveAssociationsList(response.data));

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

export default superadminMiddleware;
