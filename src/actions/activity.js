// === action types
export const UPDATE_ACTIVITY_FIELD = 'UPDATE_ACTIVITY_FIELD';
export const SUBMIT_ACTIVITY = 'SUBMIT_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

// === action creators
export const updateActivityField = (value, name) => ({
  type: UPDATE_ACTIVITY_FIELD,
  value: value,
  name: name,
});

export const submitActivity = () => ({
  type: SUBMIT_ACTIVITY,
});

export const deleteActivity = () => ({
  type: DELETE_ACTIVITY,
});
