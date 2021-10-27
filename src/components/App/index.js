// == Import
import { Route, Switch } from 'react-router-dom';

import ConfidentialPolicy from '../../pages/ConfidentialPolicy';
import Contact from '../../pages/Contact';
import DashboardSuperAdmin from '../../pages/DashboardSuperAdmin';
import SuperAdminCommand from '../../pages/DashboardSuperAdminCommands'
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';
import LegalMention from '../../pages/LegalMention';
import AsideNavbar from '../AsideNavbar';

import './styles.scss';

// == Composant
const App = () => (

  <div className="App">
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/legalMention">
        <LegalMention />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/confidentialPolicy">
        <ConfidentialPolicy />
      </Route>
      <Route path="/superadmin/backoffice/associations">
        <DashboardSuperAdmin />
      </Route>
      <Route path="/superadmin/backoffice/commands">
        <SuperAdminCommand />
      </Route>
      <Route path="/associations/backoffice">
        <AsideNavbar />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
