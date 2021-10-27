import AsideNavbar from '../../components/AsideNavbar';
import Listing from '../../components/Listing';

import './styles.scss';

// == Composant
const DashboardSuperAdmin = () => (
  <div className="dashboard-superadmin">
    <div className="aside-navbar">
      <AsideNavbar />
    </div>
    <div className="listing-wrapper">
     <Listing />
     <Listing />
     <Listing />
    </div>
  </div>
);

// == Export
export default DashboardSuperAdmin;
