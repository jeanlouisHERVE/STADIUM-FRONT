/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import moment from 'moment';
import './styles.scss';
import Avatar from './avatar.svg';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const DashboardAdherent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adherentData, setAdherentData] = useState([]);

  const activities = adherentData.activity;
  const events = adherentData.event;

  let cssClass = 'dashboard-adherent-documents';

  const isCompleted = adherentData.file.isComplete;

  if (isCompleted) {
    cssClass += 'dasboard-adherent-documents-NotDisplay';
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const path = useLocation();

  useEffect(() => {
    async function loadData() {
      const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1/${path.pathname}`);
      // const rawResponse = await fetch(`http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1/backoffice/superadmin/profiles/${pathArray[6]}`);
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
      <div className="dashboard-adherent">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <div className="dashboard-adherent-rightside">
          <h1 className="dashboard-adhrent-title">ADHERENT : {adherentData.firstName} {adherentData.lastName}</h1>
          <div className="dashboard-adherent-presentation">
            <div className="dashboard-adherent-presentation-leftside">
              <p className="dashboard-adherent-presentation-title">Informations : </p>
              <p className="dashboard-adherent-presentation-item"><p className="strong">Nom : </p>&nbsp; {adherentData.lastName}</p>
              <p className="dashboard-sup"><p className="strong">Prénom : </p>&nbsp; {adherentData.firstName}</p>
              {adherentData.file && <p className="dashboard-adherent-presentation-item"><p className="strong">Date de naissance : </p>  &nbsp;{moment(adherentData.file.dateOfBirth).format('DD/MM/YYYY')}</p>}
              {adherentData.file && <p className="dashboard-adherent-presentation-item"><p className="strong">Adresse : </p> &nbsp;{adherentData.file.address}</p>}
              {adherentData.file && <p className="dashboard-adherent-presentation-item"><p className="strong">Téléphone : </p> &nbsp;{adherentData.file.phoneNumber}</p>}
              {adherentData.file && <p className="dashboard-adherent-presentation-item"><p className="strong">Dossier complet :</p> &nbsp;{adherentData.file.isComplete ? <span className="material-icons" style={{ color: 'green' }}> task</span> : <span className="material-icons" style={{ color: 'red' }}>cancel</span> }</p>}
              <div className={cssClass}>
                <p className="dashboard-adherent-presentation-item" /><p className="strong">Compléter mon dossier </p> &nbsp;
                <p className="dashboard-adherent-document-label"> <label htmlFor="ID"> Pièce d'identité </label> <input className="dashboard-adherent-document-input" type="file" id="ID" name="ID" accept=".pdf" /> </p>

                <p className="dashboard-adherent-document-label"> <label htmlFor="medical certificate"> Certificat médical </label> <input className="dashboard-adherent-document-input" type="file" id="medical certificate" name="medical certificate" accept=".pdf" /> </p>

                <p className="dashboard-adherent-document-label"> <label htmlFor="internal rules"> Règlement intérieur </label> </p>
                <p className="dashboard-adherent-document-label-upload">Télécharger le document <span className="material-icons-round">file_download</span>

                  <input className="dashboard-adherent-document-input-upload" type="file" id="medical certificate" name="internal rules" accept=".pdf" />
                </p>
              </div>
            </div>
            {adherentData.file && <p className="dashboard-adherent-presentation-item"><p className="strong">Cotisation à jour : </p> &nbsp;{adherentData.file.isPaid ? <span className="material-icons" style={{ color: 'green' }}> credit_score</span> : <span className="material-icons" style={{ color: 'red' }}>cancel</span> }</p>}
            {adherentData.association && <p className="dashboard-adherent-presentation-item"><p className="strong">Association Sportive : </p> &nbsp;{adherentData.association.name} </p>}
            <p className="dashboard-adherent-presentation-title">Cours : </p>
            <div className="dashboard-adherent-classes-container">
              {adherentData.activity
                  && activities.map((activity) => (
                    <div className="dashboard-adherent-activity-container" key={activity.id}>
                      <div className="dashboard-adherent-activity-leftside">
                        <span className="material-icons">pool</span>
                        <p className="dashboard-adherent-activity-name">{activity.name}</p>
                      </div>
                      { activity && activity.lessons && activity.lessons.map((lesson) => (
                        <div className="dashboard-adherent-activity-rightside">
                          <p className="dashboard-adherent-activity-level">{lesson.level}</p>
                        </div>
                      ))}
                    </div>
                  ))}
            </div>
            <p className="dashboard-adherent-presentation-title">Evénements : </p>
            <div className="dashboard-adherent-events-container">
              {adherentData.event
                  && events.map((event) => (
                    <div className="dashboard-adherent-event" key={event.id}>
                      <span className="material-icons">emoji_events</span>
                      <p className="dashboard-adherent-activity-name">{event.name}</p>
                      <p className="dashboard-adherent-activity-level">{moment(event.startDate).format('DD/MM/YYYY')}</p>
                    </div>
                  ))}
            </div>
            {/* <p className="dashboard-adherent-presentation-title">Documents : </p>
            <div className="dashboard-adherent-documents-container">
              {adherentData.file && <p className="dashboard-adherent-document"><p className="strong">Certificat médical :
              // eslint-disable-next-line max-len
              </p> &nbsp;{adherentData.file.medicalCertificate ? <span className="material-icons" style={{ color: 'green' }}> task</span> : <span className="material-icons" style={{ color: 'red' }}>cancel</span> }</p>}
              {adherentData.file && <p className="dashboard-adherent-document"><p className="strong">Règlement intérieur : </p> &nbsp;{adherentData.file.rulesOfProcedure ? 
              <span className="material-icons" style={{ color: 'green' }}> task</span> : <span className="material-icons" style={{ color: 'red' }}>cancel</span> }</p>}
            </div> */}
          </div>
          <img className="dashboard-adherent-presentation-picture" src={Avatar} alt="" />
        </div>
      </div>
    </>
  );
};

// == Export
export default DashboardAdherent;
