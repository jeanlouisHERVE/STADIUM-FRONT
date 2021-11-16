import {
  UPDATE_LESSON_FIELD,
} from '../actions/lesson';

const initialState = {
  level: '',
  startTime: '',
  endTime: '',
  day: '',
  place: '',
  activity: '',
  association: '',
};

function addLessonReducer(state = initialState, action) {
  // console.log('une action passe dans le reducer');
  switch (action.type) {
    case UPDATE_LESSON_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}

export default addLessonReducer;
