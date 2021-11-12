import {
  UPDATE_ADHERENT_FIELD,
} from '../actions/adherent';

const initialState = {
  firstname: '',
  lastname: '',
  picture: '',
  accountId: 0,
  association: 0,
};

function addAdherentReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ADHERENT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}

export default addAdherentReducer;
