// == Import
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import './styles.scss';

// == Composant
const App = () => (

  <div className="App">
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/legalMention" exact>
        <Home />
      </Route>
      <Route path="/contact" exact>
        <Home />
      </Route>
      <Route path="/confidentialPolicy" exact>
        <Home />
      </Route>
      <Route path="superadmin/backoffice/associations">
        <Home />
      </Route>
      <Route />
    </Switch>
  </div>
);

// == Export
export default App;
