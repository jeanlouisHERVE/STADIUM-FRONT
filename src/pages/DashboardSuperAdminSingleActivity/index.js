import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import api from '../../utils/axios';
import AsideNavbarSuperAdmin from '../../components/AsideNavbarSuperAdmin';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SuperAdminLesson = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activityData, setActivityData] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const pathArray = window.location.pathname.split('/');
  console.log(pathArray);

  useEffect(() => {
    async function loadData() {
      api.get(`/api/v1/backoffice/superadmin/activities/${pathArray[6]}`).then((response) => {
        setActivityData(response);
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
          <h1 className="dashboard-superadmin-title">ACTIVITE: {activityData.name}</h1>
          <div className="dashboard-superadmin-activity">
            <p className="dashboard-superadmin-activity-title">Informations : </p>
            <p className="dashboard-superadmin-activity-item"><p className="strong">nom : </p>&nbsp; {activityData.name}</p>
            <p className="dashboard-superadmin-activity-item"><p className="strong">photo : </p>&nbsp; {activityData.picture} </p>
          </div>
          <button className="dashboard-superadmin-activity-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }}><Link to={`/backoffice/superadmin/associations/${pathArray[4]}`} className="card-link">retour</Link></button>
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminLesson;
