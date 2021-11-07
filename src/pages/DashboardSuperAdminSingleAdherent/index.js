import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './styles.scss';
import Avatar from './avatar.svg';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SuperAdminAdherent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adherentData, setAdherentData] = useState([]);

  const activities = adherentData.activity;
  const events = adherentData.event;
 

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
              <p className="dashboard-superadmin-presentation-item"><p className="strong">Nom : </p>&nbsp; {adherentData.lastName}</p>
              <p className="dashboard-superadmin-presentation-item"><p className="strong">Prénom : </p>&nbsp; {adherentData.firstName}</p>
              {adherentData.file && <p className="dashboard-superadmin-presentation-item"><p className="strong">Date de naissance : </p>  &nbsp;{moment(adherentData.file.dateOfBirth).subtract(10, 'days').calendar()}</p>}
              {adherentData.file && <p className="dashboard-superadmin-presentation-item"><p className="strong">Adresse : </p> &nbsp;{adherentData.file.address}</p>}
              {adherentData.file && <p className="dashboard-superadmin-presentation-item"><p className="strong">Téléphone : </p> &nbsp;{adherentData.file.phoneNumber}</p>}
              {adherentData.file && <p className="dashboard-superadmin-presentation-item"><p className="strong">Dossier complet :</p> &nbsp;{adherentData.file.isComplete ? <span className="material-icons" style={{ color: 'green' }}> task</span> : <span className="material-icons" style={{ color: 'red' }}>cancel</span> }</p>}
              {adherentData.file && <p className="dashboard-superadmin-presentation-item"><p className="strong">Cotisation à jour : </p> &nbsp;{adherentData.file.isPaid ? <span className="material-icons" style={{ color: 'green' }}> credit_score</span> : <span className="material-icons" style={{ color: 'red' }}>cancel</span> }</p>}
              {adherentData.association && <p className="dashboard-superadmin-presentation-item"><p className="strong">Association Sportive : </p> &nbsp;{adherentData.association.name} </p>}
              <p className="dashboard-superadmin-presentation-title">Cours : </p>
              <div className="dashboard-superadmin-adherent-classes-container">
                {adherentData.activity
                  && activities.map((activity) => (
                    <div className="dashboard-superadmin-adherent-activity-container" key={activity.id}>
                      <span className="material-icons">pool</span>
                      <p className="dashboard-superadmin-adherent-activity-name">{activity.name}</p>
                      <p className="dashboard-superadmin-adherent-activity-level">Niveau</p>
                    </div>
                  ))}
              </div>
              <p className="dashboard-superadmin-presentation-title">Evénements : </p>
              <div className="dashboard-superadmin-adherent-events-container">
                {adherentData.event
                  && events.map((event) => (
                    <div className="dashboard-superadmin-adherent-event" key={event.id}>
                      <span className="material-icons">emoji_events</span>
                      <p className="dashboard-superadmin-adherent-activity-name">{event.name}</p>
                      <p className="dashboard-superadmin-adherent-activity-level">{moment(event.startDate).format('L')}</p>
                    </div>
                  ))}
              </div>
              <p className="dashboard-superadmin-presentation-title">Documents : </p>
            </div>
            <img className="dashboard-superadmin-presentation-picture" src={Avatar} alt="" />
          </div>
          <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }}><Link to={`/backoffice/superadmin/associations/${pathArray[4]}`} className="card-link">retour</Link></button>
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminAdherent;
