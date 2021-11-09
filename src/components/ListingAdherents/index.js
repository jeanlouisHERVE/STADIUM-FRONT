import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.scss';

// == Composant
const ListingAdherents = ({ adherents }) => {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [select, setSelect] = useState(false);
  // const [buttonAZIsActive, setButtonAZIsActive] = useState(true);
  // const [buttonZAIsActive, setButtonZAIsActive] = useState(false);
  // function compare(a, b) {
  //   if (a.lastName > b.lastName) {
  //     return 1;
  //   }
  //   if (a.lastName < b.lastName) {
  //     return -1;
  //   }
  //   if (a.lastName === b.lastName) {
  //     if (a.firstName > b.firstName) {
  //       return 1;
  //     }
  //     if (a.firstName < b.firstName) {
  //       return -1;
  //     }
  //   }
  //   return 0;
  // }

  // const sortingList = () => {
  //   console.log('fonction appelée');
  //   adherents.sort(compare);
  // };

  // const sortingList = adherents.sort((a, b) => (a.lastName > b.lastName)
  // ? 1 : (a.lastName === b.lastName) ? ((a.firstNamAdherente > b.firstName) ? 1 : -1) : -1 )

  const path = useLocation();
  console.log(path);

  // Costumization des bouton du selecteur AZ - ZA
  // let buttonAZDiv;
  // let buttonZADiv;

  // if (buttonAZIsActive) {
  //   buttonAZDiv = <button className="dashboard-superadmin-button" type="submit"
  // style={{ backgroundColor: '#02A5A5', color: 'white' }}
  // onClick={adherentButtonFunction}>Adhérents</button>;
  // // }
  // else {
  //   buttonAZDiv = <button className="dashboard-superadmin-button" type="submit"
  // style={{ backgroundColor: 'white', color: '#02A5A5' }}
  // onClick={adherentButtonFunction}>Adhérents</button>;
  // }

  // if (buttonZAIsActive) {
  //   buttonZADiv = <button className="dashboard-superadmin-button" type="submit"
  // style={{ backgroundColor: '#02A5A5', color: 'white' }}
  // onClick={ClasseButtonFunction}>Cours</button>;
  // }
  // else {
  //   buttonZADiv = <button className="dashboard-superadmin-button" type="submit"
  // style={{ backgroundColor: 'white', color: '#02A5A5' }}
  // onClick={ClasseButtonFunction}>Cours</button>;
  // }

  return (
    <div className="listingAdherent-container">
      <div className="listingAdherent-header">
        <div className="listingAdherent-header-leftside">
          <div className="listingAdherent-title"><h2>Adhérents</h2></div>
          <Link to={`${path.pathname}/addAdherent`} className="listingAdherent-addIcon"><span className=" material-icons">add</span></Link>
        </div>
        <div className="listingAdherent-header-rightside">
          <div className="listingAdherent-filter">
            <button
              className="listingAdherent-filter-button"
              // onClick={sortingList}
              type="button"
            >
              A - Z
            </button>
            <button className="listingAdherent-filter-button" type="submit">Z - A</button>
          </div>
        </div>
      </div>
      <div className="listingAdherent-line-header">
        <div className="listingAdherent-line-header-leftside">
          <div className="listingAdherent-line-header-items">Nom</div>
          <div className="listingAdherent-line-header-items">Prénom</div>
        </div>
        <div className="listingAdherent-line-header-rightside" />
      </div>
      { adherents
      && adherents.map((item) => (
        <div className="listingAdherent-line-container" key={item.id}>
          <div className="listingAdherent-line-leftside">
            <div className="listingAdherent-line-items lastname">{item.lastName}</div>
            <div className="listingAdherent-line-items">{item.firstName}</div>
          </div>
          <div className="listingAdherent-line-rightside">
            <Link to={`${path.pathname}/adherent/${item.id}`} className="card-link"><span className="listingAdherent-line-icon-view material-icons">visibility</span></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

ListingAdherents.propTypes = {
  adherents: PropTypes.array.isRequired,
};

// == Export
export default ListingAdherents;
