import { UPDATE_ACTIVITY_FIELD } from '../actions/activity';

const initialState = {
  name: '',
  picture: '',
  association: 0,
};

function addActivityReducer(state = initialState, action) {
  // console.log('une action passe dans le reducer');
  switch (action.type) {
    case UPDATE_ACTIVITY_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}

export default addActivityReducer;
