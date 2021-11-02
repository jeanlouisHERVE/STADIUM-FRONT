// == Import
import { Route, Switch } from 'react-router-dom';

import ConfidentialPolicy from '../../pages/ConfidentialPolicy';
import Contact from '../../pages/Contact';
import DashboardSuperAdmin from '../../pages/DashboardSuperAdmin';
import SuperAdminCommand from '../../pages/DashboardSuperAdminCommands';
import Error404 from '../../pages/404';
import Home from '../../pages/Home';
import LegalMention from '../../pages/LegalMention';
import AsideNavbar from '../AsideNavbar';
import SignupUser from '../../pages/SignupPage/SignupUser';
import SignupMember from '../../pages/SignupPage/SignupMember';
import SubscriptionAsso from '../../pages/Subscription/SubscriptionAsso';
import LoginPage from '../../pages/LoginPage';

import './styles.scss';

// == Composant
const App = () => (

  <div className="App">
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/inscription" exact>
        <SignupUser />
      </Route>
      <Route path="/inscription/adherent" exact>
        <SignupMember />
      </Route>
      <Route path="/inscription/association" exact>
        <SubscriptionAsso />
      </Route>
      <Route path="/connexion">
        <LoginPage />
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
      <Route path="/superadmin/backoffice" exact>
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
