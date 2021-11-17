// == Import : npm
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
// import { persistor } from './store';

// == Import : local
// Composants
import App from './components/App';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootComponent = (
  <Provider store={store}>
    <Router>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Router>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootComponent, target);
