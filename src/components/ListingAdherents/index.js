import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const ListingAdherents = ({ adherents }) => {
  function compare(a, b) {
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

  const sortingList = () => {
    console.log('fonction appelée');
    adherents.sort(compare);
  };

  // const sortingList = adherents.sort((a, b) => (a.lastName > b.lastName)
  // ? 1 : (a.lastName === b.lastName) ? ((a.firstNamAdherente > b.firstName) ? 1 : -1) : -1 );

  return (
    <div className="listingAdherent-container">
      {/* {console.log(adherents)} */}
      <div className="listingAdherent-header">
        <div className="listingAdherent-header-leftside">
          <div className="listingAdherent-title"><h2>Adhérents</h2></div>
          <div className="listingAdherent-addIcon"><span className=" material-icons">add</span></div>
        </div>
        <div className="listingAdherent-header-rightside">
          <div className="listingAdherent-filter">
            <button
              className="listingAdherent-filter-button"
              onClick={sortingList}
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
      {
        adherents.map((item) => (
          <>
            <div className="listingAdherent-line-container" key={item.id}>
              <div className="listingAdherent-line-leftside">
                <div className="listingAdherent-line-items">{item.firstName}</div>
                <div className="listingAdherent-line-items">{item.lastName}</div>
              </div>
              <div className="listingAdherent-line-rightside">
                <span className="listingAdherent-line-icon-message material-icons">email</span>
                <span className="listingAdherent-line-icon-modify material-icons">border_color</span>
                <span className="listingAdherent-line-icon-view material-icons">visibility</span>
                <span className="listingAdherent-line-icon-delete material-icons">delete</span>
              </div>
            </div>
          </>
        ))
      }
    </div>
  );
};

ListingAdherents.propTypes = {
  adherents: PropTypes.array.isRequired,
};

// == Export
export default ListingAdherents;
