// == Import
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import ConfidentialPolicy from '../../pages/ConfidentialPolicy';
import Contact from '../../pages/Contact';
import LegalMention from '../../pages/LegalMention';
import Error404 from '../../pages/Error404';

import Home from '../../pages/Home';
import DashboardSuperAdmin from '../../pages/DashboardSuperAdmin';
import SuperAdminCommand from '../../pages/DashboardSuperAdminCommands';
import AsideNavbar from '../AsideNavbar';
import Messages from '../Messages';

import LoginPage from '../../containers/LoginPage';
import SignupUser from '../../containers/SignupPages/SignupUser';
import SignupMember from '../../containers/SignupPages/SignupMember';
import SignupAssociation from '../../containers/SignupPages/SignupAssociation';
import SettingsSuperAdmin from '../../containers/Settings/SettingsSuperAdmin';

import './styles.scss';

// == Composant
// const App = (props) => {
//   useEffect(() => {
//     props.loadData();
//   }, []);

function App(props) {
  useEffect(() => {
    props.loadAssociations();
  }, []);

  if (props.loading) {
    return (
      <div>
        <p>No Data Yet</p>
      </div>
    );
  }

  return (
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
          <SuperAdminCommand />
        </Route>
        <Route path="/associations/backoffice">
          <AsideNavbar />
        </Route>
        <Route path="/backoffice/superadmin/messages">
          <Messages />
        </Route>
        <Route path="/backoffice/superadmin/reglages">
          <SettingsSuperAdmin />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  loadAssociations: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

// == Export
export default App;
