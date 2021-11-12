import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

import AsideNavbar from '../../components/AsideNavbar';
import ListingAdherents from '../../components/ListingAdherents';
import ListingClasses from '../../components/ListingClasses';
import ListingEvents from '../../components/ListingEvents';
import ListingActivities from '../../components/ListingActivities';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './styles.scss';

// == Composant
const SuperAdminAssociationCommands = () => {
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

  const path = useLocation();
  // console.log(path.pathname);

  // const pathArray = window.location.pathname.split('/');
  // console.log(pathArray);

  useEffect(() => {
    async function loadData() {
      // const rawResponse = await fetch(`http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1${path.pathname}`);
      const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1${path.pathname}`);
      // const rawResponse = await fetch(`http://pablo-cany.vpnuser.lan:8000/api/v1${path.pathname}`);
      const response = await rawResponse.json();
      setData(response);
      setIsLoaded(true);
      console.log(response);
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
    buttonAdherentDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }} onClick={adherentButtonFunction}>Adhérents</button>;
  }
  else {
    buttonAdherentDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: 'white', color: '#02A5A5' }} onClick={adherentButtonFunction}>Adhérents</button>;
  }

  if (buttonClasseIsActive) {
    buttonClasseDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }} onClick={ClasseButtonFunction}>Cours</button>;
  }
  else {
    buttonClasseDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: 'white', color: '#02A5A5' }} onClick={ClasseButtonFunction}>Cours</button>;
  }

  if (buttonEventIsActive) {
    buttonEventDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }} onClick={eventButtonFunction}>Evénements</button>;
  }
  else {
    buttonEventDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: 'white', color: '#02A5A5' }} onClick={eventButtonFunction}>Evénements</button>;
  }

  if (buttonActivityIsActive) {
    buttonActivityDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }} onClick={ActivityButtonFunction}>Activités</button>;
  }
  else {
    buttonActivityDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: 'white', color: '#02A5A5' }} onClick={ActivityButtonFunction}>Activités</button>;
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <div className="dashboard-superadmin-rightside">
          <h1 className="dashboard-superadmin-title">Tableau de bord : {data.name}</h1>
          <div className="dashboard-superadmin-presentation">
            <div className="dashboard-superadmin-presentation-leftside">
              <p className="dashboard-superadmin-presentation-title">Informations : </p>
              <p className="dashboard-superadmin-presentation-item"><p className="strong">Nom du Président : </p> &nbsp; {data.presidentFirstName}</p>
              <p className="dashboard-superadmin-presentation-item"><p className="strong">Prénom du Président : </p> &nbsp; {data.presidentLastName}</p>
              <p className="dashboard-superadmin-presentation-item"><p className="strong">Adresse : </p> &nbsp; {data.address}</p>
              <p className="dashboard-superadmin-presentation-item"><p className="strong">Téléphone : </p> &nbsp; {data.phoneNumber}</p>
            </div>
            <div className="dashboard-superadmin-presentation-picture">Picture</div>
          </div>
          <div className="dashboard-superadmin-buttonsList">
            {buttonAdherentDiv}
            {buttonActivityDiv}
            {buttonClasseDiv}
            {buttonEventDiv}
          </div>
          <div className="dashboard-superadmin-listing-wrapper">
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
export default SuperAdminAssociationCommands;
