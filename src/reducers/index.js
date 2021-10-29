import { combineReducers } from 'redux';

// Import des reducers
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  // ci dessous on ajoute tous les reducers dont on a besoin
});

export default rootReducer;
