import { useState } from 'react';
import AsideNavbar from '../../components/AsideNavbar';
import ListingAdherents from '../../components/ListingAdherents';
import ListingEvents from '../../components/ListingEvents';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import adherentsData from '../../utils/data/adherentsData';
import eventsData from '../../utils/data/eventsData';
import './styles.scss';

// == Composant
const DashboardSuperAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonAdherentIsActive, setButtonAdherentIsActive] = useState(false);
  const [buttonEventIsActive, setButtonEventIsActive] = useState(false);
  const [showAdherents, setShowAdherents] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const adherentButtonFunction = () => {
    setButtonEventIsActive(false);
    setShowEvents(false);
    setShowAdherents(!showAdherents);
    setButtonAdherentIsActive(!buttonAdherentIsActive);
  };

  const eventButtonFunction = () => {
    setButtonAdherentIsActive(false);
    setShowAdherents(false);
    setShowEvents(!showEvents);
    setButtonEventIsActive(!buttonEventIsActive);
  };

  let buttonAdherentDiv;
  let buttonEventDiv;

  if (buttonAdherentIsActive) {
    buttonAdherentDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: '#02A5A5', color: 'white' }} onClick={adherentButtonFunction}>Adhérents</button>;
  }
  else {
    buttonAdherentDiv = <button className="dashboard-superadmin-button" type="submit" style={{ backgroundColor: 'white', color: '#02A5A5' }} onClick={adherentButtonFunction}>Adhérents</button>;
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
          <h1 className="dashboard-superadmin-title">Tableau de bord NameOfTheAssociation</h1>
          <div className="dashboard-superadmin-presentation">
            <div className="dashboard-superadmin-presentation-leftside">
              <p className="dashboard-superadmin-presentation-title">Informations :</p>
              <p className="dashboard-superadmin-presentation-item">Nom du Président : PresidentLastname</p>
              <p className="dashboard-superadmin-presentation-item">Prénom du Président : PresidentLastname</p>
              <p className="dashboard-superadmin-presentation-item">Adresse : Address</p>
              <p className="dashboard-superadmin-presentation-item">Téléphone : PhoneNumber</p>
              <p className="dashboard-superadmin-presentation-item">Email : Email</p>
              <p className="dashboard-superadmin-presentation-item">Nombre d'adhérents : NumberofAdherents</p>
            </div>
            <div className="dashboard-superadmin-presentation-picture">Picture</div>
          </div>
          <div className="dashboard-superadmin-buttonsList">
            {buttonAdherentDiv}
            <button className="dashboard-superadmin-button" type="submit">Cours</button>
            {buttonEventDiv}
            {/* <button className="dashboard-superadmin-button" type="submit"
            onClick={() => setShowEvents(!showEvents), buttonFunction}>Evénements</button> */}
          </div>
          <div className="dashboard-superadmin-listing-wrapper">
            {showAdherents ? <ListingAdherents adherents={adherentsData} /> : null}
            {showEvents ? <ListingEvents events={eventsData} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

// == Export
export default DashboardSuperAdmin;
