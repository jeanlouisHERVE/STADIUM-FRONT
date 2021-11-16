import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

import api from '../../utils/axios';
import AsideNavbarAdmin from '../../components/AsideNavbarAdmin';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import PlanningAdmin from '../../components/PlanningAdmin';
import CarousselPictureAdmin from '../../components/CarousselPicturesAdmin';
import EventAdmin from '../../components/EventAdmin';
import MessageAdmin from '../../components/MessageAdmin';
import LessonAdmin from '../../components/LessonAdmin';
import './styles.scss';

// == Composant
const DashboardAdminAssociation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [activities, setActivities] = useState([]);

  const path = useLocation();
  console.log(path);
  // console.log(path.pathname);
  // const pathArray = window.location.pathname.split('/');
  // console.log(pathArray);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function loadData() {
      api.get('/api/v1/backoffice/admin/association/').then((response) => {
        setData(response.data);

        const assoEventFetch = api.get('/api/v1/backoffice/admin/association/events/');
        const assoActivitiesFetch = api.get('/api/v1/backoffice/admin/association/activities/');

        Promise.all([assoEventFetch, assoActivitiesFetch]).then((result) => {
          setEvents(result[0].data);
          setActivities(result[1].data);
          setIsLoaded(true);
        });
      });
    }
    loadData();
  }, []);
  return (
    isLoaded && (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin">
        <div className="aside-navbar">
          <AsideNavbarAdmin />
        </div>
        <div className="dashboard-adminAssociation-rightside">
          <div className="dashboard-adminAssociation-menu">
            <div className="dashboard-adminAssociation-top">
              <PlanningAdmin />
              <CarousselPictureAdmin />
            </div>
            <div className="dashboard-adminAssociation-down">
              <LessonAdmin activities={activities} />
              <EventAdmin events={events} />
              <MessageAdmin />
            </div>
          </div>
        </div>
      </div>
    </>
    )
  );
};

// == Export
export default DashboardAdminAssociation;
