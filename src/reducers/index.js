import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import des reducers
import loginReducer from './loginReducer';
import signupUserReducer from './signupUserReducer';
import signupMemberReducer from './signupMemberReducer';
import signupAssociationReducer from './signupAssociationReducer';
import eventReducer from './eventReducer';
import lessonReducer from './lessonReducer';
import activityReducer from './activityReducer';
import settingsSuperAdminReducer from './Settings/settingsSuperAdminReducer';
import associationsReducer from './associationsReducer';
import AdherentReducer from './adherentReducer';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const rootReducer = combineReducers({
  login: loginReducer,
  signupUser: signupUserReducer,
  signupMember: signupMemberReducer,
  signupAssociation: signupAssociationReducer,
  event: eventReducer,
  lesson: lessonReducer,
  activity: activityReducer,
  settingsSuperAdmin: settingsSuperAdminReducer,
  associations: associationsReducer,
  adherent: AdherentReducer,
  // ci dessous on ajoute tous les reducers dont on a besoin
});

export default persistReducer(persistConfig, rootReducer);
