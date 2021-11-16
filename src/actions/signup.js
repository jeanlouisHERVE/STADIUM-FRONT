// === action types
export const UPDATE_SUBSCRIPTION_FIELD = 'UPDATE_SUBSCRIPTION_FIELD';
// soumission du formulaire de login
export const SUBMIT_SUBSCRIPTION = 'SUBMIT_SUBSCRIPTION';

// === action creators

// on a besoin d'un payload si l'intention ne suffit pas ET si l'information dont
// on a besoin n'est pas encore présente dans le state

export const updateSubscriptionField = (value, identifier) => ({
  type: UPDATE_SUBSCRIPTION_FIELD,
  value: value,
  name: identifier,
});

export const submitSubscription = () => ({
  type: SUBMIT_SUBSCRIPTION,
});
