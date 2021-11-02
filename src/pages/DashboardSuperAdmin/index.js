import AsideNavbar from '../../components/AsideNavbar';
import CardAssociation from '../../components/CardAssociation';

import './styles.scss';
import associationDatas from './data/associations';

// == Composant
const DashboardSuperAdmin = () => (
  <div className="dashboard-superadmin">
    <AsideNavbar />
    <div className="cards">
      {associationDatas.map((association) => (
        <CardAssociation key={association.id} association={association} />
      ))}
    </div>
  </div>
);

// == Export
export default DashboardSuperAdmin;
