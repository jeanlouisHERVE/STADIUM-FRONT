// import { Route, Switch } from 'react-router-dom';

// Pages
// import Home from '../../pages/Home';
// import DashboardSuperAdmin from '../../pages/DashboardSuperAdmin';
// import SuperAdminAssociationCommands from '../../pages/DashboardSuperAdminAssociationCommands';
// import ConfidentialPolicy from '../../pages/ConfidentialPolicy';
// import Contact from '../../pages/Contact';
// import LegalMention from '../../pages/LegalMention';
// import Error404 from '../../pages/Error404';

// import SuperAdminModifyAdherent from '../../pages/DashboardSuperAdminSingleAdherentModifying';
// import SuperAdminEvent from '../../pages/DashboardSuperAdminSingleEvent';

// import SuperAdminModifyEvent from '../../pages/DashboardSuperAdminSingleEventModifying';
// import SuperAdminLesson from '../../pages/DashboardSuperAdminSingleLesson';
// import SuperAdminAddClasse from '../../pages/DashboardSuperAdminSingleClasseAdding';
// import SuperAdminModifyClasse from '../../pages/DashboardSuperAdminSingleClasseModifying';

// import SuperAdminSettings from '../../pages/DashboardSuperAdminSettings';

// import Messages from '../Messages';

// Containers
// import LoginPage from '../../containers/LoginPage';
// import SignupUser from '../../containers/SignupPages/SignupUser';
// import SignupMember from '../../containers/SignupPages/SignupMember';
// import SignupAssociation from '../../containers/SignupPages/SignupAssociation';
// import SettingsSuperAdmin from '../../containers/Settings/SettingsSuperAdmin';

// import SettingsSuperAdmin from '../SettingsSuperAdmin';

// import './styles.scss';

// const App = () => (
//   <div className="App">
//     <Switch>
//       <Route path="/" exact>
//         <Home />
//       </Route>
//       <Route path="/inscription" exact>
//         <SignupUser />
//        </Route>
//        <Route path="/inscription/adherent">
//         <SignupMember />
//       </Route>
//       <Route path="/inscription/association">
//         <SignupAssociation />
//       </Route>
//       <Route path="/connexion">
//         <LoginPage />
//       </Route>
//       <Route path="/legalMention">
//         <LegalMention />
//       </Route>
//       <Route path="/contact">
//         <Contact />
//       </Route>
//       <Route path="/confidentialPolicy">
//         <ConfidentialPolicy />
//       </Route>
//       <Route path="/backoffice/superadmin/associations" exact>
//         <DashboardSuperAdmin />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/:id" exact>
//         <SuperAdminAssociationCommands />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/:id/adherent/:id">
//         <SuperAdminAdherent />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/adherent/add" exact>
//         <SuperAdminAddAdherent />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/adherent/modify" exact>
//         <SuperAdminModifyAdherent />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/event" exact>
//         <SuperAdminEvent />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/event/add" exact>
//         <SuperAdminAddEvent />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/event/modify" exact>
//         <SuperAdminModifyEvent />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/classe" exact>
//         <SuperAdminClasse />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/classe/add" exact>
//         <SuperAdminAddClasse />
//       </Route>
//       <Route path="/backoffice/superadmin/associations/classe/modify" exact>
//         <SuperAdminModifyClasse />
//       </Route>
//       <Route path="/backoffice/superadmin/messages">
//         <Messages />
//       </Route>
//       <Route path="/backoffice/superadmin/reglages">
//         <SettingsSuperAdmin />
//       </Route>
//       <Route>
//         <Error404 />
//       </Route>
//     </Switch>
//   </div>
// );

// export default App;

//* -------------------------------------------------------------------------
//* data with Middleware
//* -------------------------------------------------------------------------

import { Route, Switch } from 'react-router-dom';

import ConfidentialPolicy from '../../pages/ConfidentialPolicy';
import Contact from '../../pages/Contact';
import LegalMention from '../../pages/LegalMention';
import Error404 from '../../pages/Error404';

import Home from '../../pages/Home';
import SuperAdminAssociationCommands from '../../pages/DashboardSuperAdminAssociationCommands';
import Messages from '../Messages';

import LoginPage from '../../containers/LoginPage';
import SignupUser from '../../containers/SignupPages/SignupUser';
import SignupMember from '../../containers/SignupPages/SignupMember';
import SignupAssociation from '../../containers/SignupPages/SignupAssociation';

import DashboardSuperAdmin from '../../containers/DashboardSuperAdmin';
import SettingsSuperAdmin from '../../containers/Settings/SettingsSuperAdmin';
import SuperAdminEvent from '../../pages/DashboardSuperAdminSingleEvent';
import SuperAdminAddEvent from '../../containers/DashboardSuperAdminSingleEventAddingPage';
import SuperAdminLesson from '../../pages/DashboardSuperAdminSingleLesson';

import SuperAdminAdherent from '../../pages/DashboardSuperAdminSingleAdherent';
import SuperAdminAddAdherent from '../../pages/DashboardSuperAdminSingleAdherentAdding';

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
      <Route path="/backoffice/superadmin/associations/:id" exact>
        <SuperAdminAssociationCommands />
      </Route>
      <Route path="/backoffice/superadmin/associations/:id/adherent/:id">
        <SuperAdminAdherent />
      </Route>
      <Route path="/backoffice/superadmin/associations/:id/addAdherent">
        <SuperAdminAddAdherent />
      </Route>
      {/* <Route path="/backoffice/superadmin/associations/adherent/modify" exact>
        <SuperAdminModifyAdherent />
      </Route> */}
      <Route path="/backoffice/superadmin/associations/:id/event/:id" exact>
        <SuperAdminEvent />
      </Route>
      <Route path="/backoffice/superadmin/associations/:id/addEvent">
        <SuperAdminAddEvent />
      </Route>
      {/* <Route path="/backoffice/superadmin/associations/event/modify" exact>
        <SuperAdminModifyEvent />
      </Route> */}
      <Route path="/backoffice/superadmin/associations/:id/lesson/:id" exact>
        <SuperAdminLesson />
      </Route>
      {/* <Route path="/backoffice/superadmin/associations/classe/add" exact>
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

export default App;
