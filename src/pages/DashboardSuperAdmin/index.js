import PropTypes from 'prop-types';

import AsideNavbar from '../../components/AsideNavbar';
import Cards from '../../components/Cards';

import './styles.scss';
// import associationDatas from './data/associations';

// == Composant
const DashboardSuperAdmin = ({ associations }) => (
  <div className="dashboard-superadmin">
    <AsideNavbar />
    <Cards associations={associations.loadAssociations} />
  </div>
);

DashboardSuperAdmin.propTypes = {
  loadAssociations: PropTypes.func.isRequired,
  associations: PropTypes.array.isRequired,
};

// == Export
export default DashboardSuperAdmin;
