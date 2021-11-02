import { combineReducers } from 'redux';

// Import des reducers
import loginReducer from './loginReducer';
import signupUserReducer from './signupUserReducer';
import signupMemberReducer from './signupMemberReducer';
import signupAssociationReducer from './signupAssociationReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signupUser: signupUserReducer,
  signupMember: signupMemberReducer,
  signupAssociation: signupAssociationReducer,
  // ci dessous on ajoute tous les reducers dont on a besoin
});

export default rootReducer;
