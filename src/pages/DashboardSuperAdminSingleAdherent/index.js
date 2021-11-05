import './styles.scss';
import { useState, useEffect } from 'react';
// import moment from 'moment';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SuperAdminAdherent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adherentData, setAdherentData] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // décompose l'url contenue dans le navigateur
  const pathArray = window.location.pathname.split('/');
  console.log(pathArray);

  useEffect(() => {
    async function loadData() {
      const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/profiles/${pathArray[6]}`);
      const response = await rawResponse.json();
      setAdherentData(response);
      console.log(response);
    }
    loadData();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-adherent">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <div className="dashboard-superadmin-rightside">
          <h1 className="dashboard-superadmin-title">ADHERENT : {adherentData.firstName} {adherentData.lastName}</h1>
          <div className="dashboard-superadmin-presentation">
            <div className="dashboard-superadmin-presentation-leftside">
              <p className="dashboard-superadmin-presentation-title">Informations : </p>
              <p className="dashboard-superadmin-presentation-item">Nom : {adherentData.lastName}</p>
              <p className="dashboard-superadmin-presentation-item">Prénom : {adherentData.firstName}</p>
              {adherentData.file && <p className="dashboard-superadmin-presentation-item"> Date de naissance : </p>}
              {adherentData.file && <p className="dashboard-superadmin-presentation-item">Adresse : {adherentData.file.address}</p>}
              {adherentData.file && <p className="dashboard-superadmin-presentation-item">Téléphone : {adherentData.file.phoneNumber}</p>}
              {adherentData.file && <p className="dashboard-superadmin-presentation-item">Dossier complet :  {adherentData.file.isComplete ? "bien" : "pas bien" }</p>}
              {adherentData.file && <p className="dashboard-superadmin-presentation-item">Cotisation à jour :  {adherentData.file.isPaid ? "bien" : "pas bien" }</p>}
              {adherentData.association && <p className="dashboard-superadmin-presentation-item">Association Sportive : {adherentData.association.name} </p>}






            </div>
            <div className="dashboard-superadmin-presentation-picture">Picture</div>
          </div>
          <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }}>Evénements</button>
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminAdherent;
