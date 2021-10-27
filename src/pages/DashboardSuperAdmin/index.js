import AsideNavbar from '../../components/AsideNavbar';
import CardAssociation from '../../components/CardAssociation';
// import ControlCenter from '../../components/ControlCenter';

import './styles.scss';
import associationDatas from './data/associations';

// == Composant
const DashboardSuperAdmin = () => (
  <div className="dashboard-superadmin">
    <AsideNavbar />
    <div className="cards-wrapper">
      {associationDatas.map((association) => (
        <CardAssociation association={association} />
      ))}
    </div>
  </div>
);

// == Export
export default DashboardSuperAdmin;
