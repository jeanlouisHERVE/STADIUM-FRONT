import AsideNavbar from '../../components/AsideNavbar';
import Listing from '../../components/Listing';
import eventsData from '../../utils/data/eventsData';
import adherentsData from '../../utils/data/adherentsData';
import './styles.scss';

// == Composant
const DashboardSuperAdmin = () => (
  <div className="dashboard-superadmin">
    <div className="aside-navbar">
      <AsideNavbar />
    </div>
    <div className="dashboard-superadmin-rightside">
      <h1 className="dashboard-superadmin-title">Tableau de bord NameOfTheAssociation</h1>
      <div className="dashboard-superadmin-presentation">
        <p className="dashboard-superadmin-presentation-item">PresidentLastname</p>
        <p className="dashboard-superadmin-presentation-item">PresidentFirstname</p>
        <p className="dashboard-superadmin-presentation-item">Address</p>
        <p className="dashboard-superadmin-presentation-item">PhoneNumber</p>
        <p className="dashboard-superadmin-presentation-item">NumberofAdherents</p>
      </div>
      <div className="dashboard-superadmin-listing-wrapper">
        <Listing adherents={adherentsData} />
      </div>
    </div>
  </div>
);

// == Export
export default DashboardSuperAdmin;
