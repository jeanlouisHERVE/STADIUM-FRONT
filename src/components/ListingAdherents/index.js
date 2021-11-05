// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

// == Composant
const ListingAdherents = ({ adherents }) => (
  // const [isAsc, setIsAsc] = useState(true);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [data, setData] = useState([]);

  // const path = useLocation();
  // console.log(path.pathname);

  // const filteredData = () => {
  //   setIsAsc(!isAsc);
  //   console.log('Bouton cliqué');
  // };

  // useEffect(() => {
  //   let url;
  //   if (isAsc(true)) {
  //     url = 'http://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/profiles/desc';
  //   }
  //   if (isAsc(false)) {
  //     url = 'http://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/profiles';
  //   }

  //   async function loadData() {
  //     const rawResponse = await fetch(url);
  // const rawResponse = await fetch(`http://pablo-cany.vpnuser.lan:8000/api/v1${path.pathname}`);
  //     const response = await rawResponse.json();
  // setIsClicked(true);
  //     setData(response);
  //     console.log(response);
  //   }
  //   loadData();
  // }, []);

  <div className="listing-container">
    {/* {console.log(adherents)} */}
    <div className="listing-header">
      <div className="listing-header-leftside">
        <div className="listing-title"><h2>Adhérents</h2></div>
        <div className="listing-addIcon"><span className=" material-icons">add</span></div>
      </div>
      <div className="listing-header-rightside">
        <div className="listing-filter">
          <button
            className="listing-filter-button"
            // onClick={filteredData}
            type="button"
          >
            A - Z
          </button>
          <button
            className="listing-filter-button"
            // onClick={filteredData}
            type="button"
          >
            Z - A
          </button>
        </div>
      </div>
    </div>
    <div className="listing-line-header">
      <div className="listing-line-header-leftside">
        <div className="listing-line-header-items">Nom</div>
        <div className="listing-line-header-items">Prénom</div>
      </div>
      <div className="listing-line-header-rightside" />
    </div>
    {
      adherents.map((item) => (
        <>
          <div className="listing-line-container" key={item.id}>
            <div className="listing-line-leftside">
              <div className="listing-line-items">{item.firstName}</div>
              <div className="listing-line-items">{item.lastName}</div>
            </div>
            <div className="listing-line-rightside">
              <span className="listing-line-icon material-icons">email</span>
              <span className="listing-line-icon material-icons">border_color</span>
              <span className="listing-line-icon material-icons">visibility</span>
              <span className="listing-line-icon material-icons">delete</span>
            </div>
          </div>
        </>
      ))
    }
  </div>
);

ListingAdherents.propTypes = {
  adherents: PropTypes.array.isRequired,
};

// == Export
export default ListingAdherents;
