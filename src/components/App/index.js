import './styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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
import SuperAdminAddAdherent from '../../pages/DashboardSuperAdminSingleAdherentAdding';
import SuperAdminModifyAdherent from '../../pages/DashboardSuperAdminSingleAdherentModifying';

// --------------------------
// ADMINISTRATEUR ASSOCIATION
// --------------------------
import DashboardAdminAssociation from '../../containers/DashboardAdminAssociation';
import DashboardAdminAssociationGestionnaire from '../../pages/DashboardAdminAssociationGestionnaire';

import DashboardAdherent from '../../pages/DashboardAdherent';
// == Composant
const App = ({ userAuthentified }) => (
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
        {userAuthentified ? <Redirect to="/backoffice/superadmin/associations" exact /> : <LoginPage />}
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
        {!userAuthentified ? <Error403 /> : null}
      </Route>
    </Switch>

    {userAuthentified && (
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

        {/* Every Pages of the AdminAssociation Dashboard */}
        <Route path="/backoffice/admin/association/:id" exact>
          <DashboardAdminAssociation />
        </Route>
        <Route path="/backoffice/admin/association/:id/gestionnaire" component={DashboardAdminAssociationGestionnaire} />

        <Route path="/adherent/profil/:id">
          <DashboardAdherent />
        </Route>

        <Route>
          <Error404 />
        </Route>
      </Switch>
    )}
  </div>
);

App.propTypes = {
  userAuthentified: PropTypes.bool.isRequired,
};

export default App;
