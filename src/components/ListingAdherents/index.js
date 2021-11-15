import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.scss';

// == Composant
const ListingAdherents = ({ adherents, sort, asort }) => {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [select, setSelect] = useState(false);
  // const [buttonAZIsActive, setButtonAZIsActive] = useState(true);
  // const [buttonZAIsActive, setButtonZAIsActive] = useState(false);


  // const sortingList = adherents.sort((a, b) => (a.lastName > b.lastName)
  // ? 1 : (a.lastName === b.lastName) ? ((a.firstNamAdherente > b.firstName) ? 1 : -1) : -1 )

  const path = useLocation();
  // console.log(path);

//  useEffect(() => {
//    async function loadData() {
//      const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1${path.pathname}`);
      // const rawResponse = await fetch(`http://pablo-cany.vpnuser.lan:8000/api/v1${path.pathname}`);
//      const response = await rawResponse.json();
//      setData(response);
      // setIsLoaded(true);
      // setSelect(true);
      // console.log(response);
//    }
//    loadData();
//  }, []);

//  useEffect(() => {
//    async function loadData() {
//      const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1${path.pathname}`);
      // const rawResponse = await fetch(`http://pablo-cany.vpnuser.lan:8000/api/v1${path.pathname}`);
//      const response2 = await rawResponse.json();
//      setData(response2);
      // setIsLoaded(true);
      // setSelect(false);
      // console.log(response2);
//    }
//    loadData();
//  }, []);

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
          <Link to={`${path.pathname}/addAdherent`} className="listingAdherent-addIcon"><span className=" material-icons">person_add</span></Link>
        </div>
        <div className="listingAdherent-header-rightside">
          <div className="listingAdherent-filter">
            <button
              className="listingAdherent-filter-button"
              onClick={sort}
              type="button"
            >
              A - Z
            </button>
            <button className="listingAdherent-filter-button" type="submit" onClick={asort}>Z - A</button>
          </div>
        </div>
      </div>
      <div className="listingAdherent-line-header">
        <div className="listingAdherent-line-header-leftside">
          <div className="listingAdherent-line-header-status">Status</div>
          <div className="listingAdherent-line-header-items">Nom</div>
          <div className="listingAdherent-line-header-items">Prénom</div>
        </div>
        <div className="listingAdherent-line-header-rightside" />
      </div>
      { adherents
      && adherents.map((item) => (
        <div className="listingAdherent-line-container" key={item.id}>
          <div className="listingAdherent-line-leftside">
            <div className="listingAdherent-line-status"><div className="status" /></div>
            <div className="listingAdherent-line-items lastname">{item.lastName}</div>
            <div className="listingAdherent-line-items">{item.firstName}</div>
          </div>
          <div className="listingAdherent-line-rightside">
            <Link to={`${path.pathname}/adherent/${item.id}`} className="card-link"><span className="listingAdherent-line-icon-view material-icons">visibility</span></Link>
            <span className="listingAdherent-line-icon-view material-icons">delete</span>
          </div>
        </div>
      ))}
    </div>
  );
};

ListingAdherents.propTypes = {
  adherents: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  asort: PropTypes.func.isRequired,
};

// == Export
export default ListingAdherents;
