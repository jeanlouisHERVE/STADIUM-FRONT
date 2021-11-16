import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

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
      const rawResponse = await fetch('http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1/backoffice/admin/association');
      // const rawResponse = await fetch(`http://pablo-cany.vpnuser.lan:8000/api/v1${path.pathname}`);
      const response = await rawResponse.json();
      setData(response);
      setIsLoaded(true);
      console.log(response);
    }
    loadData();
  }, []);

  return (
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
              <LessonAdmin activities={data.activities} />
              <EventAdmin events={data.events} />
              <MessageAdmin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// == Export
export default DashboardAdminAssociation;
