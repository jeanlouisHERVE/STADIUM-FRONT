import {
  UPDATE_SUBSCRIPTION_FIELD,
} from '../actions/signup';

const initialState = {
  // valeur de l'input pour l'adresse e-mail
  username: '',
  // valeur de l'input pour le mot de passe
  password: '',
};

function signupUserReducer(state = initialState, action) {
  // console.log('une action passe dans le reducer');
  switch (action.type) {
    case UPDATE_SUBSCRIPTION_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
}

export default signupUserReducer;
