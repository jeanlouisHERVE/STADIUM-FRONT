// === action types
export const UPDATE_ADHERENT_FIELD = 'UPDATE_ADHERENT_FIELD';
export const SUBMIT_ADHERENT = 'SUBMIT_ADHERENT';

// === action creators
export const updateAdherentField = (value, name) => ({
  type: UPDATE_ADHERENT_FIELD,
  value: value,
  name: name,
});

export const submitAdherent = () => ({
  type: SUBMIT_ADHERENT,
});
