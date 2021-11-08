import './styles.scss';
import useState from 'react';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SuperAdminClasse = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-classe">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <h1>DashboardSuperAdminClasse</h1>
      </div>
    </>
  );
};

// == Export
export default SuperAdminClasse;
