// === action types
export const UPDATE_EVENT_FIELD = 'UPDATE_EVENT_FIELD';
export const SUBMIT_EVENT = 'SUBMIT_EVENT';

// === action creators
export const updateEventField = (value, name) => ({
  type: UPDATE_EVENT_FIELD,
  value: value,
  name: name,
});

export const submitEvent = () => ({
  type: SUBMIT_EVENT,
});
