import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const ListingAdherents = ({ adherents }) => (
  <div className="listingAdherent-container">
    {console.log(adherents)}
    <div className="listingAdherent-header">
      <div className="listingAdherent-header-leftside">
        <div className="listingAdherent-title"><h2>Adhérents</h2></div>
        <div className="listingAdherent-addIcon"><span className=" material-icons">add</span></div>
      </div>
      <div className="listingAdherent-header-rightside">
        <div className="listingAdherent-filter">
          <button className="listingAdherent-filter-button" type="submit">A - Z </button>
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
    {
      adherents.map((item) => (
        <>
          <div className="listingAdherent-line-container" key={item.id}>
            <div className="listingAdherent-line-leftside">
              <div className="listingAdherent-line-items">{item.firstName}</div>
              <div className="listingAdherent-line-items">{item.lastName}</div>
            </div>
            <div className="listingAdherent-line-rightside">
              <span className="listingAdherent-line-icon material-icons">email</span>
              <span className="listingAdherent-line-icon material-icons">border_color</span>
              <span className="listingAdherent-line-icon material-icons">visibility</span>
              <span className="listingAdherent-line-icon material-icons">delete</span>
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
