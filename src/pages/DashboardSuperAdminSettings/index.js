import './styles.scss';
import useState from 'react';

import AsideNavbarSuperAdmin from '../../components/AsideNavbarSuperAdmin';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SuperAdminSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-settings">
        <div className="aside-navbar">
          <AsideNavbarSuperAdmin />
        </div>
        <h1>DashboardSuperAdminSetting</h1>
      </div>
    </>
  );
};

// == Export
export default SuperAdminSettings;
