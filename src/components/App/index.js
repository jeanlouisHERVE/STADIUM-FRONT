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

// HOMEPAGE ET DEPENDANCES
import Home from '../../pages/Home';
import ConfidentialPolicy from '../../pages/ConfidentialPolicy';
import Contact from '../../pages/Contact';
import DashboardSuperAdmin from '../../pages/DashboardSuperAdmin';
// import SuperAdminCommand from '../../pages/DashboardSuperAdminCommand';
import Error404 from '../../pages/404';
import LegalMention from '../../pages/LegalMention';

import Messages from '../Messages';

// SUPER INSCRIPTION AUTHENTIFICATION
import LoginPage from '../../containers/LoginPage';
import SignupUser from '../../containers/SignupPages/SignupUser';
import SignupMember from '../../containers/SignupPages/SignupMember';
import SignupAssociation from '../../containers/SignupPages/SignupAssociation';

// SUPER ADMINISTRATEUR
import SuperAdminAssociation from '../../pages/DashboardSuperAdminAssociation';
import SettingsSuperAdmin from '../../containers/Settings/SettingsSuperAdmin';

// événements
import SuperAdminEvent from '../../pages/DashboardSuperAdminSingleEvent';
import SuperAdminAddEvent from '../../containers/DashboardSuperAdminSingleEventAddingPage';

// activité
import SuperAdminActivity from '../../pages/DashboardSuperAdminSingleActivity';
import SuperAdminAddActivity from '../../containers/DashboardSuperAdminSingleActivityAddingPage';

// cours
import SuperAdminLesson from '../../pages/DashboardSuperAdminSingleLesson';
import SuperAdminAddLesson from '../../containers/DashboardSuperAdminSingleLessonAddingPage';

// adherent
import SuperAdminAdherent from '../../pages/DashboardSuperAdminSingleAdherent';
// import SuperAdminAddAdherent from '../../pages/DashboardSuperAdminSingleAdherentAdding';

// ADMINISTRATEUR ASSOCIATION
import DashboardAdminAssociation from '../../containers/DashboardAdminAssociation';

// ADHERENT
import DashboardAdherent from '../../pages/DashboardAdherent';

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
      {/* Every Pages of the SuperAdmin Dashboard */}
      <Route path="/backoffice/superadmin/associations" exact>
        <DashboardSuperAdmin />
      </Route>
      <Route path="/backoffice/superadmin/associations/:id" exact>
        <SuperAdminAssociation />
      </Route>
      <Route path="/backoffice/superadmin/associations/:id/adherent/:id">
        <SuperAdminAdherent />
      </Route>
      {/* <Route path="/backoffice/superadmin/associations/:id/addAdherent">
        <SuperAdminAddAdherent />
      </Route> */}
      {/* <Route path="/backoffice/superadmin/associations/adherent/modify" exact>
        <SuperAdminModifyAdherent />
      </Route> */}
      <Route path="/backoffice/superadmin/associations/:id/event/:id" exact>
        <SuperAdminEvent />
      </Route>
      <Route path="/backoffice/superadmin/associations/:id/addEvent" component={SuperAdminAddEvent} />
      {/* <Route path="/backoffice/superadmin/associations/event/modify" exact>
        <SuperAdminModifyEvent />
      </Route> */}
      <Route path="/backoffice/superadmin/associations/:id/lesson/:id" exact>
        <SuperAdminLesson />
      </Route>
      <Route path="/backoffice/superadmin/associations/:id/addLesson" component={SuperAdminAddLesson} />
      <Route path="/backoffice/superadmin/associations/:id/activity/:id" exact>
        <SuperAdminActivity />
      </Route>
      <Route path="/backoffice/superadmin/associations/:id/addActivity" component={SuperAdminAddActivity} />
      {/* <Route path="/backoffice/superadmin/associations/classe/add" exact>
        <SuperAdminAddClasse />
      </Route>
      <Route path="/backoffice/superadmin/associations/classe/modify" exact>
        <SuperAdminModifyClasse />
      </Route>
      <Route path="/backoffice/superadmin/settings" exact>
        <SuperAdminSettings />
      </Route> */}
      {/* Every Pages of the AdminAssociation Dashboard */}
      <Route path="/backoffice/admin/association/:id" exact>
        <DashboardAdminAssociation />
      </Route>
      <Route path="/member/profil/:id" exact>
        <DashboardAdherent />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </div>
);

export default App;
