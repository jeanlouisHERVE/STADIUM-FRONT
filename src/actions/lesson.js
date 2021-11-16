// === action types
export const UPDATE_LESSON_FIELD = 'UPDATE_LESSON_FIELD';
export const SUBMIT_LESSON = 'SUBMIT_LESSON';

// === action creators
export const updateLessonField = (value, name) => ({
  type: UPDATE_LESSON_FIELD,
  value: value,
  name: name,
});

export const submitLesson = () => ({
  type: SUBMIT_LESSON,
});
