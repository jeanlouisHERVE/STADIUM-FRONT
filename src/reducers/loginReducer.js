import {
  UPDATE_LOGIN_FIELD,
  SUCCESS_LOGIN,
} from '../actions/login';

const initialState = {
  // valeur de l'input pour l'adresse e-mail
  username: '',
  // valeur de l'input pour le mot de passe
  password: '',
  // indique si l'utilisateur est authentifié
  userAuthentified: false,
};

function loginReducer(state = initialState, action) {
  // console.log('une action passe dans le reducer');
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SUCCESS_LOGIN:
      return {
        ...state,
        // afficher le formulaire de saisie de message
        userAuthentified: true,
      };

    default:
      return state;
  }
}

export default loginReducer;
