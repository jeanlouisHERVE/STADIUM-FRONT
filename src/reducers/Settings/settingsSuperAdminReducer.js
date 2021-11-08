import {
  UPDATE_LOGIN_FIELD,
  SUCCESS_UPDATE_LOGIN,
} from '../../actions/settings';

const initialState = {
  // valeur de l'input pour l'adresse e-mail
  email: 'default@test.fr',
  // valeur de l'input pour le mot de passe
  password: 'testdefault',
  testField1: 'default1',
  testField2: 'default2',
  buttonMessageSaved: false,
};

function settingsSuperAdminReducer(state = initialState, action) {
  // console.log('une action passe dans le reducer');
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SUCCESS_UPDATE_LOGIN:
      return {
        ...state,
        buttonMessageSaved: true,
      };

    default:
      return state;
  }
}

export default settingsSuperAdminReducer;
