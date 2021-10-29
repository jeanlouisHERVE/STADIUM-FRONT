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
      <div className="cards">
        {associationDatas.map((association) => (
          <CardAssociation key={association.id} association={association} />
        ))}
      </div>
    </div>
  </div>
);

// == Export
export default DashboardSuperAdmin;
