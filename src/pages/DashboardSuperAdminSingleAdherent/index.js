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
      <div className="dashboard-superadmin-adherent">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <div className="dashboard-superadmin-rightside">
          <h1 className="dashboard-superadmin-title">ADHERENT : Nom</h1>
          <div className="dashboard-superadmin-presentation">
            <div className="dashboard-superadmin-presentation-leftside">
              <p className="dashboard-superadmin-presentation-title">Informations : </p>
              <p className="dashboard-superadmin-presentation-item">Nom du Président : </p>
              <p className="dashboard-superadmin-presentation-item">Prénom du Président : </p>
              <p className="dashboard-superadmin-presentation-item">Adresse : </p>
              <p className="dashboard-superadmin-presentation-item">Téléphone : </p>
            </div>
            <div className="dashboard-superadmin-presentation-picture">Picture</div>
          </div>
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminAdherent;
