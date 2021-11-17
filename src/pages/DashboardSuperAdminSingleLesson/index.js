import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import daysOfWeek from '../../utils/staticDatas/daysOfWeek';
import './styles.scss';

import api from '../../utils/axios';
import AsideNavbarSuperAdmin from '../../components/AsideNavbarSuperAdmin';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SuperAdminLesson = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lessonData, setLessonData] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const pathArray = window.location.pathname.split('/');
  console.log(pathArray);

  useEffect(() => {
    async function loadData() {
      api.get(`/api/v1/backoffice/superadmin/lessons/${pathArray[6]}`).then((response) => {
        setLessonData(response.data);
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
          {lessonData.activity && <h1 className="dashboard-superadmin-title">COURS: {lessonData.activity.name}</h1>}
          <div className="dashboard-superadmin-lesson">
            <p className="dashboard-superadmin-lesson-title">Informations : </p>
            <p className="dashboard-superadmin-lesson-item"><p className="strong">Emplacement : </p>&nbsp; {lessonData.level}</p>
            <p className="dashboard-superadmin-lesson-item"><p className="strong">Emplacement : </p>&nbsp; {daysOfWeek[lessonData.day]} </p>
            <p className="dashboard-superadmin-lesson-item"><p className="strong">Heure de début : </p>&nbsp; {moment(lessonData.startTime).format('LT')}</p>
            <p className="dashboard-superadmin-lesson-item"><p className="strong">Heure de fin : </p>&nbsp; {moment(lessonData.endTime).format('LT')}</p>
            <p className="dashboard-superadmin-lesson-item"><p className="strong">Emplacement : </p>&nbsp; {lessonData.place}</p>
          </div>
          <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }}><Link to={`/backoffice/superadmin/associations/${pathArray[4]}`} className="card-link">retour</Link></button>
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminLesson;
