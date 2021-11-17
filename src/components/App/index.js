import './styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

// HOMEPAGE ET DEPENDANCES
import Home from '../../pages/Home';
import ConfidentialPolicy from '../../pages/ConfidentialPolicy';
import Contact from '../../pages/Contact';
import LegalMention from '../../pages/LegalMention';
import Error404 from '../../pages/Error404';
import Error403 from '../../pages/Error403';

// SUPER INSCRIPTION AUTHENTIFICATION
import LoginPage from '../../containers/LoginPage';
import SignupUser from '../../containers/SignupPages/SignupUser';
import SignupMember from '../../containers/SignupPages/SignupMember';
import SignupAssociation from '../../containers/SignupPages/SignupAssociation';

// --------------------
// SUPER ADMINISTRATEUR
// --------------------
import DashboardSuperAdmin from '../../containers/DashboardSuperAdmin';
import SuperAdminAssociation from '../../pages/DashboardSuperAdminAssociation';
import SettingsSuperAdmin from '../../containers/Settings/SettingsSuperAdmin';

// événements
import SuperAdminEvent from '../../pages/DashboardSuperAdminSingleEvent';
import SuperAdminAddEvent from '../../containers/DashboardSuperAdminSingleEventAddingPage';
import SuperAdminModifyEvent from '../../pages/DashboardSuperAdminSingleEventModifying';

// activité
import SuperAdminActivity from '../../pages/DashboardSuperAdminSingleActivity';
import SuperAdminAddActivity from '../../containers/DashboardSuperAdminSingleActivityAddingPage';
// import SuperAdminModifyActivity from '../../pages/dashboardSuperAdminSingleActivityAdding';

// cours
import SuperAdminLesson from '../../pages/DashboardSuperAdminSingleLesson';
import SuperAdminAddLesson from '../../containers/DashboardSuperAdminSingleLessonAddingPage';
import SuperAdminModifyLesson from '../../pages/DashboardSuperAdminSingleLessonModifying';

// adherent
import SuperAdminAdherent from '../../pages/DashboardSuperAdminSingleAdherent';
import SuperAdminAddAdherent from '../../containers/DashboardSuperAdminSingleAdherentAddingPage';
import SuperAdminModifyAdherent from '../../pages/DashboardSuperAdminSingleAdherentModifying';

// --------------------------
// ADMINISTRATEUR ASSOCIATION
// --------------------------
import DashboardAdminAssociation from '../../containers/DashboardAdminAssociation';
import DashboardAdminAssociationGestionnaire from '../../pages/DashboardAdminAssociationGestionnaire';

// == Composant
const App = () => {
  const isAuthenticated = localStorage.getItem('token');

  const payloadReader = () => {
    if (isAuthenticated) {
      const base64Url = isAuthenticated.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
    return null;
  };

  const isSuperAdmin = () => {
    if ((payloadReader().roles[0].indexOf('SUPER')) > -1) {
      return true;
    }
    return false;
  };

  const isAdmin = () => {
    if ((payloadReader().roles[0].indexOf('ASSO')) > -1) {
      return true;
    }
    return false;
  };

  // console.log((isAuthenticated.split('.'))[2]);
  // console.log(payloadReader().roles);
  console.log(isSuperAdmin());
  console.log(isAdmin());

  return (
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
        <Route exact path="/connexion">
          {isAuthenticated ? <Redirect to="/backoffice/superadmin/associations" exact /> : <LoginPage />}
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

        <Route>
          {!isAuthenticated ? <Error403 /> : null}
        </Route>
      </Switch>

      {isAuthenticated && isSuperAdmin && (
        <Switch>
          <Route path="/backoffice/superadmin/associations" exact>
            <DashboardSuperAdmin />
          </Route>
          <Route path="/backoffice/superadmin/associations/:id" exact>
            <SuperAdminAssociation />
          </Route>

          {/* SuperAdmin Adherent */}
          <Route path="/backoffice/superadmin/associations/:id/adherent/:id">
            <SuperAdminAdherent />
          </Route>
          <Route path="/backoffice/superadmin/associations/:id/addAdherent" component={SuperAdminAddAdherent} />
          <Route path="/backoffice/superadmin/associations/adherent/modify" exact>
            <SuperAdminModifyAdherent />
          </Route>

          {/* SuperAdmin Event */}
          <Route path="/backoffice/superadmin/associations/:id/event/:id" exact>
            <SuperAdminEvent />
          </Route>
          <Route path="/backoffice/superadmin/associations/:id/addEvent" component={SuperAdminAddEvent} />
          <Route path="/backoffice/superadmin/associations/event/modify" exact>
            <SuperAdminModifyEvent />
          </Route>

          {/* SuperAdmin Lesson */}
          <Route path="/backoffice/superadmin/associations/:id/lesson/:id" exact>
            <SuperAdminLesson />
          </Route>
          <Route path="/backoffice/superadmin/associations/:id/addLesson" component={SuperAdminAddLesson} />
          <Route path="/backoffice/superadmin/associations/lesson/modify" exact>
            <SuperAdminModifyLesson />
          </Route>

          {/* SuperAdmin activity */}
          <Route path="/backoffice/superadmin/associations/:id/activity/:id" exact>
            <SuperAdminActivity />
          </Route>
          <Route path="/backoffice/superadmin/associations/:id/addActivity" component={SuperAdminAddActivity} />

          <Route path="/backoffice/superadmin/reglages" exact>
            <SettingsSuperAdmin />
          </Route>

          <Route>
            <Error404 />
          </Route>
        </Switch>
      )}

      {isAuthenticated && isAdmin && (
        <Switch>
          {/* Every Pages of the AdminAssociation Dashboard */}
          <Route path="/backoffice/admin/association" exact>
            <DashboardAdminAssociation />
          </Route>
          <Route path="/backoffice/admin/association/:id/gestionnaire" component={DashboardAdminAssociationGestionnaire} />

          {/* <Route>
            <Error404 />
          </Route> */}
        </Switch>
      )}
    </div>
  );
};

export default App;
