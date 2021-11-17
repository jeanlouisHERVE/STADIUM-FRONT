import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './styles.scss';

import api from '../../utils/axios';
import AsideNavbarSuperAdmin from '../../components/AsideNavbarSuperAdmin';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SuperAdminEvent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventData, setEventData] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const pathArray = window.location.pathname.split('/');
  console.log(pathArray);

  useEffect(() => {
    async function loadData() {
      api.get(`/api/v1/backoffice/superadmin/events/${pathArray[6]}`).then((response) => {
        setEventData(response.data);
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
          <h1 className="dashboard-superadmin-title">EVENEMENT : {eventData.name}</h1>
          <div className="dashboard-superadmin-event">
            <p className="dashboard-superadmin-event-title">Informations : </p>
            <p className="dashboard-superadmin-event-item"><p className="strong">Date de début : </p>&nbsp;  {moment(eventData.startDate).format('DD/MM/YYYY')}</p>
            <p className="dashboard-superadmin-event-item"><p className="strong">Date de fin : </p>&nbsp; {moment(eventData.endDate).format('DD/MM/YYYY')}</p>
            <p className="dashboard-superadmin-event-item"><p className="strong">Heure de début : </p>&nbsp; {moment(eventData.schedule).format('LT')}</p>
            <p className="dashboard-superadmin-event-item"><p className="strong">Emplacement : </p>&nbsp; {eventData.place}</p>
            <p className="dashboard-superadmin-event-item"><p className="strong">Nombre maximum de participants : </p>&nbsp; {eventData.maxParticipants}</p>
            <p className="dashboard-superadmin-event-title">Liste des inscrits : </p>
            <div className="dashboard-superadmin-event-profiles-container">
              {eventData.profiles
                && eventData.profiles.map((profile) => (
                  <div className="dashboard-superadmin-event-profile" key={profile.id}>
                    <p className="dashboard-superadmin-event-profile-firstname">{profile.firstName}</p>
                    <p className="dashboard-superadmin-event-profile-lastname">{profile.lastName}</p>
                  </div>
                ))}
            </div>
          </div>
          <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }}><Link to={`/backoffice/superadmin/associations/${pathArray[4]}`} className="card-link">retour</Link></button>
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminEvent;
