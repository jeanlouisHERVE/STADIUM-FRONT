import './styles.scss';
import { useState } from 'react';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SuperAdminAdherent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AsideNavbar />
      <div className="dashboard-superadmin-adherent">
        <div className="aside-navbar">
          
        </div>
        <h1>DashboardSuperAdminAdherent</h1>
      </div>
    </>
  );
};

// == Export
export default SuperAdminAdherent;
