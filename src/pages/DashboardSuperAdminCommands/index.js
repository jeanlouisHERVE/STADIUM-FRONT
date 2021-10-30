import { useState } from 'react';
import AsideNavbar from '../../components/AsideNavbar';
import Listing from '../../components/Listing';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import adherentsData from '../../utils/data/adherentsData';
import './styles.scss';

// == Composant
const DashboardSuperAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <div className="dashboard-superadmin-rightside">
          <h1 className="dashboard-superadmin-title">Tableau de bord NameOfTheAssociation</h1>
          <div className="dashboard-superadmin-presentation">
            <div className="dashboard-superadmin-presentation-leftside">
              <p className="dashboard-superadmin-presentation-title">Informations :</p>
              <p className="dashboard-superadmin-presentation-item">Nom du Président : PresidentLastname</p>
              <p className="dashboard-superadmin-presentation-item">Prénom du Président : PresidentLastname</p>
              <p className="dashboard-superadmin-presentation-item">Adresse : Address</p>
              <p className="dashboard-superadmin-presentation-item">Téléphone : PhoneNumber</p>
              <p className="dashboard-superadmin-presentation-item">Email : Email</p>
              <p className="dashboard-superadmin-presentation-item">Nombre d'adhérents : NumberofAdherents</p>
            </div>
            <div className="dashboard-superadmin-presentation-picture">Picture</div>
          </div>
          <div className="dashboard-superadmin-buttonsList">
            <button className="dashboard-superadmin-button" type="submit" onClick={() => setShow(!show)}>Adhérents</button>
            <button className="dashboard-superadmin-button" type="submit">Cours</button>
            <button className="dashboard-superadmin-button" type="submit">Evénements</button>
          </div>
          <div className="dashboard-superadmin-listing-wrapper">
            {show ? <Listing adherents={adherentsData} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

// == Export
export default DashboardSuperAdmin;
