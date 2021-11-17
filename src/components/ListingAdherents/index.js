import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import api from '../../utils/axios';
import './styles.scss';

// == Composant
const ListingAdherents = ({
  adherents,
  sort,
  asort,
  reloadData,
}) => {
  const path = useLocation();
  const deleteAdherentItem = (id) => {
    api.delete(
      // URL
      `/api/v1/backoffice/superadmin/profiles/${id}`,
      // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/events',
      // paramètres
    )
      .then((response) => {
        console.log(response);
        reloadData();
      })
      .catch((error) => {
        console.warn(error);
        // TODO mettre en place une nouvelle action (par exemple ERROR_LOGIN),
      });
  };

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
            <button
              className="listingAdherent-filter-button"
              type="submit"
              onClick={asort}
            >
              Z - A
            </button>
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
      && adherents.map((adherent) => (
        <div className="listingAdherent-line-container" key={adherent.id}>
          <div className="listingAdherent-line-leftside">
            <div className="listingAdherent-line-status"><div className="status" /></div>
            <div className="listingAdherent-line-items lastname">{adherent.lastName}</div>
            <div className="listingAdherent-line-items">{adherent.firstName}</div>
          </div>
          <div className="listingAdherent-line-rightside">
            <Link to={`${path.pathname}/adherent/${adherent.id}`} className="card-link"><span className="listingAdherent-line-icon-view material-icons">visibility</span></Link>
            <Link to={`${path.pathname}/adherent/${adherent.id}/modify`} className="card-link"><span className="listingAdherent-line-icon-view material-icons">mode_edit</span></Link>
            <span
              className="listingEvent-line-icon-delete material-icons"
              onClick={() => {
                deleteAdherentItem(adherent.id);
              }}
            >delete
            </span>
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
  reloadData: PropTypes.func.isRequired,
};

// == Export
export default ListingAdherents;
