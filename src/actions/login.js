// === action types
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
// soumission du formulaire de login
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// indiquer que l'utilisateur s'est authentifié avec succès
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
// === action creators

// on a besoin d'un payload si l'intention ne suffit pas ET si l'information dont
// on a besoin n'est pas encore présente dans le state

export const updateLoginField = (value, identifier) => ({
  type: UPDATE_LOGIN_FIELD,
  value: value,
  name: identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const successLogin = () => ({
  type: SUCCESS_LOGIN,
  userAuthentified: true,
});
