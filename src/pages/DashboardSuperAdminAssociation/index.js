/* eslint-disable react/jsx-no-bind */
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../utils/axios';
// import PropTypes from 'prop-types';

import AsideNavbarSuperAdmin from '../../components/AsideNavbarSuperAdmin';
import ListingAdherents from '../../components/ListingAdherents';
import ListingClasses from '../../components/ListingClasses';
import ListingEvents from '../../components/ListingEvents';
import ListingActivities from '../../components/ListingActivities';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import findImgByKey from '../../utils/img';
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

  function sortAsc(a, b) {
    if (a.lastName > b.lastName) {
      return 1;
    }
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName === b.lastName) {
      if (a.firstName > b.firstName) {
        return 1;
      }
      if (a.firstName < b.firstName) {
        return -1;
      }
    }

    return 0;
  }

  function sortDesc(a, b) {
    if (a.lastName > b.lastName) {
      return -1;
    }
    if (a.lastName < b.lastName) {
      return 1;
    }
    if (a.lastName === b.lastName) {
      if (a.firstName > b.firstName) {
        return -1;
      }
      if (a.firstName < b.firstName) {
        return 1;
      }
    }
    return 0;
  }

  function sortNameAsc(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }

    return 0;
  }

  function sortNameDesc(a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  }

  // function sortDateAsc(a, b) {
  //   if (a.startDate > b.startDate) {
  //     return 1;
  //   }
  //   if (a.startDate < b.startDate) {
  //     return -1;
  //   }

  //   return 0;
  // }

  const sortAdherents = () => {
    setData({
      ...data,
      profils: data.profils.sort(sortAsc),
    });
  };

  const asortAdherents = () => {
    setData({
      ...data,
      profils: data.profils.sort(sortDesc),
    });
  };

  const sortActivities = () => {
    setData({
      ...data,
      activities: data.activities.sort(sortNameAsc),
    });
  };

  const asortActivities = () => {
    setData({
      ...data,
      profils: data.activities.sort(sortNameDesc),
    });
  };

  const sortDates = () => {
    setData({
      ...data,
      events: data.events.sort(sortNameAsc),
    });
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

  async function loadData() {
    api.get(`/api/v1${path.pathname}`).then((response) => {
      setData(response.data);
      setIsLoaded(true);
    });
  }

  // async function loadData() {
  //   const rawResponse = await fetch(`http://ec2-54-197-70-206.compute-1.amazonaws.com/api/v1${path.pathname}`);
  //   // const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1${path.pathname}`);

  //   // const rawResponse = await fetch(`http://pablo-cany.vpnuser.lan:8000/api/v1${path.pathname}`);
  //   const response = await rawResponse.json();
  //   setData(response);
  //   setIsLoaded(true);
  //   // console.log(response);
  // }

  useEffect(() => {
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

  console.log(data.picture)

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin">
        <div className="aside-navbar">
          <AsideNavbarSuperAdmin />
        </div>
        <div className="dashboard-superadmin-rightside">
          <h1 className="dashboard-superadmin-title">Tableau de bord : {data.name}</h1>
          <div className="dashboard-superadmin-presentation">
            <div className="dashboard-superadmin-presentation-leftside">
              <p className="dashboard-superadmin-presentation-title">Informations : </p>
              <p className="dashboard-superadmin-presentation-item"><span className="strong">Nom du Président : </span> &nbsp; {data.presidentFirstName}</p>
              <p className="dashboard-superadmin-presentation-item"><span className="strong">Prénom du Président : </span> &nbsp; {data.presidentLastName}</p>
              <p className="dashboard-superadmin-presentation-item"><span className="strong">Adresse : </span> &nbsp; {data.address}</p>
              <p className="dashboard-superadmin-presentation-item"><span className="strong">Téléphone : </span> &nbsp; {data.phoneNumber}</p>
            </div>
            <img className="dashboard-superadmin-presentation-picture" src={findImgByKey(data.image)} alt="" />
          </div>
          <div className="dashboard-superadmin-buttonsList">
            {buttonAdherentDiv}
            {buttonActivityDiv}
            {buttonClasseDiv}
            {buttonEventDiv}
          </div>
          <div className="dashboard-superadmin-listing-wrapper">
            {showAdherents && isLoaded
              ? (
                <ListingAdherents
                  adherents={data.profils}
                  asort={asortAdherents}
                  sort={sortAdherents}
                  // eslint-disable-next-line react/jsx-no-bind
                  reloadData={loadData}
                />
              ) : null}
            {showActivities && data.activities
              ? (
                <ListingActivities
                  activities={data.activities}
                  asort={asortActivities}
                  sort={sortActivities}
                  reloadData={loadData}
                />
              ) : null}
            {showClasses && data.activities
              ? (
                <ListingClasses
                  activities={data.activities}
                  asort={asortActivities}
                  sort={sortActivities}
                  reloadData={loadData}
                />
              ) : null}
            {showEvents && isLoaded
              ? (
                <ListingEvents
                  events={data.events}
                  sortDate={sortDates}
                  reloadData={loadData}
                />
              ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminAssociationCommands;
