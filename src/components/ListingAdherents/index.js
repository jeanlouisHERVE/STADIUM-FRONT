import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const ListingAdherents = ({ adherents }) => (
  <div className="listing-container">
    {console.log(adherents)}
    <div className="listing-header">
      <div className="listing-header-leftside">
        <div className="listing-title"><h2>Adhérents</h2></div>
        <div className="listing-addIcon"><span className=" material-icons">add</span></div>
      </div>
      <div className="listing-header-rightside">
        <div className="listing-filter">
          <button className="listing-filter-button" type="submit">A - Z </button>
          <button className="listing-filter-button" type="submit">Z - A</button>
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
