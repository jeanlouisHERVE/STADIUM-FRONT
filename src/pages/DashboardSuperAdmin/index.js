import AsideNavbar from '../../components/AsideNavbar';
import CardAssociation from '../../components/CardAssociation';
// import ControlCenter from '../../components/ControlCenter';

import './styles.scss';

// == Composant
const DashboardSuperAdmin = () => (
  <div className="dashboard-superadmin">
    <AsideNavbar />
    <div className="cards-wrapper">
      <CardAssociation />
      <CardAssociation />
      {/* <ControlCenter /> */}
      <CardAssociation />
      <CardAssociation />
      <CardAssociation />
      <CardAssociation />
      <CardAssociation />
      <CardAssociation />
      <CardAssociation />
      <CardAssociation />
      <CardAssociation />
      <CardAssociation />
    </div>
  </div>
);

// == Export
export default DashboardSuperAdmin;
