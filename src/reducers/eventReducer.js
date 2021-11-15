import {
  UPDATE_EVENT_FIELD,
} from '../actions/event';

const initialState = {
  name: '',
  startDate: '',
  schedule: '',
  endDate: '',
  place: '',
  maxParticipant: 0,
  association: 0,
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
