import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

import logMiddleware from '../middlewares/logMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
import eventMiddleware from '../middlewares/eventMiddleware';

// on construit un enhancer avec à la fois les dev tools et les middlewares
const enhancer = composeWithDevTools(
  applyMiddleware(
    logMiddleware,
    authMiddleware,
    eventMiddleware,
  ),
);

/* c'est comme si on faisait :
const enhancerAvecMiddlewares = applyMiddleware(logMiddleware);
const enhancerAvecDevToolsEtMiddlewares = composeWithDevTools(enhancerAvecMiddlewares);
*/

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer,
);

export default store;
