import { SAVE_ASSOCIATIONS_LIST } from '../actions/superadmin';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ASSOCIATIONS_LIST:
      return {
        ...state,
        list: action.associations,
      };

    default:
      return state;
  }
};

export default reducer;
