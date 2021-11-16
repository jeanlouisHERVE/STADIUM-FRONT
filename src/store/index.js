import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

import logMiddleware from '../middlewares/logMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
import eventMiddleware from '../middlewares/eventMiddleware';
import lessonMiddleware from '../middlewares/lessonMiddleware';
import superAdminMiddleware from '../middlewares/superAdminMiddleware';
import adherentMiddleware from '../middlewares/adherentMiddleware';
import activityMiddleware from '../middlewares/activityMiddleware';

// on construit un enhancer avec à la fois les dev tools et les middlewares
const enhancer = composeWithDevTools(
  applyMiddleware(
    logMiddleware,
    authMiddleware,
    eventMiddleware,
    lessonMiddleware,
    superAdminMiddleware,
    adherentMiddleware,
    activityMiddleware,
  ),
);

/* c'est comme si on faisait :
const enhancerAvecMiddlewares = applyMiddleware(logMiddleware);
const enhancerAvecDevToolsEtMiddlewares = composeWithDevTools(enhancerAvecMiddlewares);
*/

export const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer,
);

export const persistor = persistStore(store);

export default { store, persistor };
