import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './styles.scss';
import Avatar from './avatar.svg';

import api from '../../utils/axios';
import AsideNavbarSuperAdmin from '../../components/AsideNavbarSuperAdmin';
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
      api.get(`/api/v1/backoffice/superadmin/profiles/${pathArray[6]}`).then((response) => {
        setAdherentData(response.data);
        console.log(response.data);
        // setIsLoaded(true);
      });
    }
    loadData();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-adherent">
        <div className="aside-navbar">
          <AsideNavbarSuperAdmin />
        </div>
        <div className="dashboard-superadmin-rightside">
          <h1 className="dashboard-superadmin-title">ADHERENT : {adherentData.firstName} {adherentData.lastName}</h1>
          <div className="dashboard-superadmin-presentation">
            <div className="dashboard-superadmin-presentation-leftside">
              <p className="dashboard-superadmin-presentation-title">Informations : </p>
              <p className="dashboard-superadmin-presentation-item"><p className="strong">Nom : </p>&nbsp; {adherentData.lastName}</p>
              <p className="dashboard-superadmin-presentation-item"><p className="strong">Prénom : </p>&nbsp; {adherentData.firstName}</p>
              {adherentData.file && <p className="dashboard-superadmin-presentation-item"><p className="strong">Date de naissance : </p>  &nbsp;{moment(adherentData.file.dateOfBirth).format('DD/MM/YYYY')}</p>}
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
                      <div className="dashboard-superadmin-adherent-activity-leftside">
                        <span className="material-icons">pool</span>
                        <p className="dashboard-superadmin-adherent-activity-name">{activity.name}</p>
                      </div>
                      { activity && activity.lessons && activity.lessons.map((lesson) => (
                        <div className="dashboard-superadmin-adherent-activity-rightside">
                          <p className="dashboard-superadmin-adherent-activity-level">{lesson.level}</p>
                        </div>
                      ))}
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
                      <p className="dashboard-superadmin-adherent-activity-level">{moment(event.startDate).format('DD/MM/YYYY')}</p>
                    </div>
                  ))}
              </div>
              <p className="dashboard-superadmin-presentation-title">Documents : </p>
              <div className="dashboard-superadmin-adherent-documents-container">
                {adherentData.file && <p className="dashboard-superadmin-adherent-document"><p className="strong">Certificat médical :</p> &nbsp;{adherentData.file.medicalCertificate ? <span className="material-icons" style={{ color: 'green' }}> task</span> : <span className="material-icons" style={{ color: 'red' }}>cancel</span> }</p>}
                {adherentData.file && <p className="dashboard-superadmin-adherent-document"><p className="strong">Règlement intérieur : </p> &nbsp;{adherentData.file.rulesOfProcedure ? <span className="material-icons" style={{ color: 'green' }}> task</span> : <span className="material-icons" style={{ color: 'red' }}>cancel</span> }</p>}
              </div>
            </div>
            <img className="dashboard-superadmin-presentation-picture" src={Avatar} alt="" />
          </div>
          <Link to={`/backoffice/superadmin/associations/${pathArray[4]}`} className="card-link dashboard-superadmin-button" style={{ backgroundColor: '#02A5A5', color: 'white' }}>retour</Link>
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminAdherent;
