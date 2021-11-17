import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

import api from '../../utils/axios';
import AsideNavbarAdmin from '../../components/AsideNavbarAdmin';
import ListingAdherents from '../../components/ListingAdherents';
import ListingClasses from '../../components/ListingClasses';
import ListingEvents from '../../components/ListingEvents';
import ListingActivities from '../../components/ListingActivities';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './styles.scss';

// == Composant
const DashboardAdminAssociationGestionnaire = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [buttonAdherentIsActive, setButtonAdherentIsActive] = useState(true);
  const [buttonClasseIsActive, setButtonClasseIsActive] = useState(false);
  const [buttonActivityIsActive, setButtonActivityIsActive] = useState(false);
  const [buttonEventIsActive, setButtonEventIsActive] = useState(false);
  const [showAdherents, setShowAdherents] = useState(true);
  const [showClasses, setShowClasses] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // actions lorsque l'on clique sur le bouton adhérents
  const adherentButtonFunction = () => {
    setButtonEventIsActive(false);
    setButtonClasseIsActive(false);
    setButtonActivityIsActive(false);
    setButtonAdherentIsActive(!buttonAdherentIsActive);
    setShowEvents(false);
    setShowClasses(false);
    setShowActivities(false);
    setShowAdherents(!showAdherents);
  };

  // actions lorsque l'on clique sur le bouton activités
  const ActivityButtonFunction = () => {
    setButtonAdherentIsActive(false);
    setButtonEventIsActive(false);
    setButtonClasseIsActive(false);
    setButtonActivityIsActive(!buttonActivityIsActive);
    setShowAdherents(false);
    setShowEvents(false);
    setShowClasses(false);
    setShowActivities(!showActivities);
  };

  // actions lorsque l'on clique sur le bouton cours
  const ClasseButtonFunction = () => {
    setButtonAdherentIsActive(false);
    setButtonEventIsActive(false);
    setButtonActivityIsActive(false);
    setButtonClasseIsActive(!buttonClasseIsActive);
    setShowAdherents(false);
    setShowEvents(false);
    setShowActivities(false);
    setShowClasses(!showClasses);
  };

  // actions lorsque l'on clique sur le bouton événements
  const eventButtonFunction = () => {
    setButtonAdherentIsActive(false);
    setButtonClasseIsActive(false);
    setButtonActivityIsActive(false);
    setButtonEventIsActive(!buttonEventIsActive);
    setShowAdherents(false);
    setShowClasses(false);
    setShowActivities(false);
    setShowEvents(!showEvents);
  };

  // const path = useLocation();
  // console.log(path.pathname);

  const pathArray = window.location.pathname.split('/');
  // console.log(pathArray);

  useEffect(() => {
    async function loadData() {
      api.get(`/api/v1/backoffice/superadmin/associations/${pathArray[6]}`).then((response) => {
        setData(response.data);
        setIsLoaded(true);
      });
    }
    loadData();
  }, []);

  // console.log(data);
  // console.log(data.name);
  // gestion de l'affichage des boutons adhérents cours et événements
  let buttonAdherentDiv;
  let buttonEventDiv;
  let buttonActivityDiv;
  let buttonClasseDiv;

  if (buttonAdherentIsActive) {
    buttonAdherentDiv = <button className="dashboard-adminAssociation-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }} onClick={adherentButtonFunction}>Adhérents</button>;
  }
  else {
    buttonAdherentDiv = <button className="dashboard-adminAssociation-button" type="submit" style={{ backgroundColor: 'white', color: '#02A5A5' }} onClick={adherentButtonFunction}>Adhérents</button>;
  }

  if (buttonClasseIsActive) {
    buttonClasseDiv = <button className="dashboard-adminAssociation-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }} onClick={ClasseButtonFunction}>Cours</button>;
  }
  else {
    buttonClasseDiv = <button className="dashboard-adminAssociation-button" type="submit" style={{ backgroundColor: 'white', color: '#02A5A5' }} onClick={ClasseButtonFunction}>Cours</button>;
  }

  if (buttonEventIsActive) {
    buttonEventDiv = <button className="dashboard-adminAssociation-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }} onClick={eventButtonFunction}>Evénements</button>;
  }
  else {
    buttonEventDiv = <button className="dashboard-adminAssociation-button" type="submit" style={{ backgroundColor: 'white', color: '#02A5A5' }} onClick={eventButtonFunction}>Evénements</button>;
  }

  if (buttonActivityIsActive) {
    buttonActivityDiv = <button className="dashboard-adminAssociation-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }} onClick={ActivityButtonFunction}>Activités</button>;
  }
  else {
    buttonActivityDiv = <button className="dashboard-adminAssociation-button" type="submit" style={{ backgroundColor: 'white', color: '#02A5A5' }} onClick={ActivityButtonFunction}>Activités</button>;
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin">
        <div className="aside-navbar">
          <AsideNavbarAdmin />
        </div>
        <div className="dashboard-adminAssociation-rightside">
          <div className="dashboard-adminAssociation-buttonsList">
            {buttonAdherentDiv}
            {buttonActivityDiv}
            {buttonClasseDiv}
            {buttonEventDiv}
          </div>
          <div className="dashboard-adminAssociation-listing-wrapper">
            {/* {showAdherents && isLoaded
              ? (<ListingAdherents adherents={data.profils} />) : null} */}
            {showAdherents && isLoaded
              ? (<ListingAdherents adherents={data.profils} />) : null}
            {showActivities && data.activities
              ? (<ListingActivities activities={data.activities} />) : null}
            {showClasses && data.activities
              ? (<ListingClasses activities={data.activities} />) : null}
            {showEvents && isLoaded
              ? <ListingEvents events={data.events} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

// == Export
export default DashboardAdminAssociationGestionnaire;
