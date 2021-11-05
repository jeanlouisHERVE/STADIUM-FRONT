// == Import
import { Route, Switch } from 'react-router-dom';

// Pages

import DashboardSuperAdmin from '../../pages/DashboardSuperAdmin';
import SuperAdminAssociationCommands from '../../pages/DashboardSuperAdminAssociationCommands';
import SuperAdminAdherent from '../../pages/DashboardSuperAdminSingleAdherent';
// import SuperAdminAddAdherent from '../../pages/DashboardSuperAdminSingleAdherentAdding';
// import SuperAdminModifyAdherent from '../../pages/DashboardSuperAdminSingleAdherentModifying';
// import SuperAdminEvent from '../../pages/DashboardSuperAdminSingleEvent';
// import SuperAdminAddEvent from '../../pages/DashboardSuperAdminSingleEventAdding';
// import SuperAdminModifyEvent from '../../pages/DashboardSuperAdminSingleEventModifying';
// import SuperAdminClasse from '../../pages/DashboardSuperAdminSingleClasse';
// import SuperAdminAddClasse from '../../pages/DashboardSuperAdminSingleClasseAdding';
// import SuperAdminModifyClasse from '../../pages/DashboardSuperAdminSingleClasseModifying';
import Home from '../../pages/Home';
import LegalMention from '../../pages/LegalMention';
import ConfidentialPolicy from '../../pages/ConfidentialPolicy';
import Contact from '../../pages/Contact';
import Error404 from '../../pages/Error404';
// import SuperAdminSettings from '../../pages/DashboardSuperAdminSettings';

// Containers
import SignupAssociation from '../../containers/SignupPages/SignupAssociation';
import SignupUser from '../../containers/SignupPages/SignupUser';
import SignupMember from '../../containers/SignupPages/SignupMember';
import LoginPage from '../../containers/LoginPage';

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
      <Route path="/inscription/adherent">
        <SignupMember />
      </Route>
      <Route path="/inscription/association">
        <SignupAssociation />
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
      <Route path="/backoffice/superadmin/associations" exact>
        <DashboardSuperAdmin />
      </Route>
      <Route path="/backoffice/superadmin/associations/:id">
        <SuperAdminAssociationCommands />
      </Route>
      <Route path="/backoffice/superadmin/add/associations/adherent">
        <SuperAdminAdherent />
      </Route>
      {/* <Route path="/backoffice/superadmin/associations/adherent/add" exact>
        <SuperAdminAddAdherent />
      </Route>
      <Route path="/backoffice/superadmin/associations/adherent/modify" exact>
        <SuperAdminModifyAdherent />
      </Route>
      <Route path="/backoffice/superadmin/associations/event" exact>
        <SuperAdminEvent />
      </Route>
      <Route path="/backoffice/superadmin/associations/event/add" exact>
        <SuperAdminAddEvent />
      </Route>
      <Route path="/backoffice/superadmin/associations/event/modify" exact>
        <SuperAdminModifyEvent />
      </Route>
      <Route path="/backoffice/superadmin/associations/classe" exact>
        <SuperAdminClasse />
      </Route>
      <Route path="/backoffice/superadmin/associations/classe/add" exact>
        <SuperAdminAddClasse />
      </Route>
      <Route path="/backoffice/superadmin/associations/classe/modify" exact>
        <SuperAdminModifyClasse />
      </Route>
      <Route path="/backoffice/superadmin/settings" exact>
        <SuperAdminSettings />
      </Route> */}
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
