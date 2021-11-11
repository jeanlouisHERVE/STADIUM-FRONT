import {
  UPDATE_EVENT_FIELD,
} from '../actions/event';

const initialState = {
  // valeur de l'input pour l'adresse e-mail
  name: '',
  // valeur de l'input pour le mot de passe
  startDate: '',
  // indique si l'utilisateur est authentifié
  schedule: '',
  // valeur de l'input pour le mot de passe
  endDate: '',
  // indique si l'utilisateur est authentifié
  place: '',
  // indique si l'utilisateur est authentifié
  maxParticipant: '',
  // indique si l'utilisateur est authentifié
  association: '',
};

function addEventReducer(state = initialState, action) {
  // console.log('une action passe dans le reducer');
  switch (action.type) {
    case UPDATE_EVENT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}

export default addEventReducer;
