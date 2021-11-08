import { combineReducers } from 'redux';

// Import des reducers
import loginReducer from './loginReducer';
import signupUserReducer from './signupUserReducer';
import signupMemberReducer from './signupMemberReducer';
import signupAssociationReducer from './signupAssociationReducer';
import settingsSuperAdminReducer from './Settings/settingsSuperAdminReducer';
import associationsReducer from './associationsReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signupUser: signupUserReducer,
  signupMember: signupMemberReducer,
  signupAssociation: signupAssociationReducer,
  settingsSuperAdmin: settingsSuperAdminReducer,
  associationsList: associationsReducer,
  // ci dessous on ajoute tous les reducers dont on a besoin
});

export default rootReducer;
