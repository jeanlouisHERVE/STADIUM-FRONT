import AsideNavbar from '../../components/AsideNavbar';
import Listing from '../../components/Listing';
// import eventsData from '../../utils/data/eventsData';
import adherentsData from '../../utils/data/adherentsData';
import './styles.scss';

// == Composant
const DashboardSuperAdmin = () => (
  <div className="dashboard-superadmin">
    <div className="aside-navbar">
      <AsideNavbar />
    </div>
    <div className="listing-wrapper">
      <Listing adherents={adherentsData} />
    </div>
  </div>
);

// == Export
export default DashboardSuperAdmin;
