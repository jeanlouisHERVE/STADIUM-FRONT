import { SAVE_ASSOCIATIONS } from '../actions/superadmin';

export const initialState = {
  listAssociations: [],
  // indique si on est en cours de chargement des recettes
  // => au lancement de l'application on se met en état de chargement, on doit
  // récupérer les recettes depuis l'API avant de pouvoir présenter l'UI
  loading: true,
};

const associationsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ASSOCIATIONS:
      return {
        ...state,
        listAssociations: action.associations,
        loading: false, // les recettes sont chargées
      };

    default:
      return state;
  }
};

export default associationsReducer;
