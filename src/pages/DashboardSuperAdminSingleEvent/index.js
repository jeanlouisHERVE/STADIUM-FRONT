import './styles.scss';
import useState from 'react';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SuperAdminEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-event-add">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <h1>DashboardSuperAdminEvent</h1>
      </div>
    </>
  );
};

// == Export
export default SuperAdminEvent;
