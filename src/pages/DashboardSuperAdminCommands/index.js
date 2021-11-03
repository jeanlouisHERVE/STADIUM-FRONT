import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

import AsideNavbar from '../../components/AsideNavbar';
import ListingAdherents from '../../components/ListingAdherents';
import ListingEvents from '../../components/ListingClasses';
import ListingClasses from '../../components/ListingEvents';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import adherentsData from '../../utils/data/adherentsData';
import eventsData from '../../utils/data/eventsData';
import './styles.scss';

// == Composant
const DashboardSuperAdminCommands = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [buttonAdherentIsActive, setButtonAdherentIsActive] = useState(true);
  const [buttonClasseIsActive, setButtonClasseIsActive] = useState(false);
  const [buttonEventIsActive, setButtonEventIsActive] = useState(false);
  const [showAdherents, setShowAdherents] = useState(true);
  const [showClasses, setShowClasses] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // actions lorsque l'on clique sur le bouton adhérents
  const adherentButtonFunction = () => {
    setButtonEventIsActive(false);
    setButtonClasseIsActive(false);
    setButtonAdherentIsActive(!buttonAdherentIsActive);
    setShowEvents(false);
    setShowClasses(false);
    setShowAdherents(!showAdherents);
  };

  // actions lorsque l'on clique sur le bouton cours
  const ClasseButtonFunction = () => {
    setButtonAdherentIsActive(false);
    setButtonEventIsActive(false);
    setButtonClasseIsActive(!buttonClasseIsActive);
    setShowAdherents(false);
    setShowEvents(false);
    setShowClasses(!showClasses);
  };

  // actions lorsque l'on clique sur le bouton événements
  const eventButtonFunction = () => {
    setButtonAdherentIsActive(false);
    setButtonClasseIsActive(false);
    setButtonEventIsActive(!buttonEventIsActive);
    setShowAdherents(false);
    setShowClasses(false);
    setShowEvents(!showEvents);
  };

  const path = useLocation();
  // console.log(path.pathname);

  // const pathArray = window.location.pathname.split('/');
  // console.log(pathArray);

  useEffect(() => {
    async function loadData() {
      const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1${path.pathname}/`);
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
              <p className="dashboard-superadmin-presentation-item">Nom du Président : {data.presidentFirstName}</p>
              <p className="dashboard-superadmin-presentation-item">Prénom du Président : {data.presidentLastName}</p>
              <p className="dashboard-superadmin-presentation-item">Adresse : {data.address}</p>
              <p className="dashboard-superadmin-presentation-item">Téléphone : </p>
            </div>
            <div className="dashboard-superadmin-presentation-picture">Picture</div>
          </div>
          <div className="dashboard-superadmin-buttonsList">
            {buttonAdherentDiv}
            {buttonClasseDiv}
            {buttonEventDiv}
          </div>
          <div className="dashboard-superadmin-listing-wrapper">
            {showAdherents && isLoaded
              ? (<ListingAdherents adherents={data.profils} />) : null}
            {/* {showClasses && data.activities
              ? (<ListingClasses classes={data.activities} />) : null} */}
            {console.log(data.events)}
            {showEvents && isLoaded
              ? <ListingEvents events={data.events} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

// DashboardSuperAdmin.propTypes = {
//   association: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     presidentFirstName: PropTypes.string.isRequired,
//     presidentLastName: PropTypes.string.isRequired,
//     phoneNumber: PropTypes.number.isRequired,
//     address: PropTypes.string.isRequired,
//     account: PropTypes.shape({
//       email: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// profils: PropTypes.array.isRequired,
// };

// == Export
export default DashboardSuperAdminCommands;
