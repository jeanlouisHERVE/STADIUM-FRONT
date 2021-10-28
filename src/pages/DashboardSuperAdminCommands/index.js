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
    <div className="dashboard-superadmin-rightside">
      <h1 className="dashboard-superadmin-title">Tableau de bord NameOfTheAssociation</h1>
      <div className="dashboard-superadmin-presentation">
        <h2>Nom prénom</h2>
      </div>
      <div className="dashboard-superadmin-listing-wrapper">
        <Listing adherents={adherentsData} />
      </div>
    </div>
  </div>
);

// == Export
export default DashboardSuperAdmin;
