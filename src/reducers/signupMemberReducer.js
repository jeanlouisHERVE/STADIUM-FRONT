import {
  UPDATE_SUBSCRIPTION_FIELD,
} from '../actions/signup';

const initialState = {
  name: '',
  firstname: '',
  birthdate: '',
  phone: '',
  address: '',
  zipCode: '',
  city: '',
};

function signupMemberReducer(state = initialState, action) {
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

export default signupMemberReducer;
