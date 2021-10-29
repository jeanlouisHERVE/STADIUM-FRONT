// === action types
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';
// soumission du formulaire de login
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// indiquer que l'utilisateur s'est authentifié avec succès
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
// === action creators

// on a besoin d'un payload si l'intention ne suffit pas ET si l'information dont
// on a besoin n'est pas encore présente dans le state

export const updateSettingsField = (value, identifier) => ({
  type: UPDATE_SETTINGS_FIELD,
  value: value,
  name: identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const successLogin = (nickname) => ({
  type: SUCCESS_LOGIN,
  nickname: nickname,
});
