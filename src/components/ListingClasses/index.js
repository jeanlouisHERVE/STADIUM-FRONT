import moment from 'moment';
import PropTypes from 'prop-types';
import './styles.scss';
// == Composant
const ListingClasses = ({ classes }) => (
  <div className="listingClasses-container">
    {console.log(classes)}
    <div className="listingClasses-header">
      <div className="listingClasses-header-leftside">
        <div className="listingClasses-title"><h2>cours</h2></div>
        <div className="listingClasses-addIcon"><span className=" material-icons">add</span></div>
      </div>
      <div className="listingClasses-header-rightside">
        <div className="listingClasses-filter">
          <button className="listingClasses-filter-button" type="submit">A - Z </button>
          <button className="listingClasses-filter-button" type="submit">Z - A</button>
        </div>
      </div>
    </div>
    <div className="listingClasses-line-header">
      <div className="listingClasses-line-header-leftside">
        <div className="listingClasses-line-header-items-classe">Sport</div>
        <div className="listingClasses-line-header-items-level">Niveau</div>
        <div className="listingClasses-line-header-items-day">Jour</div>
        <div className="listingClasses-line-header-items-startTime">H-début</div>
        <div className="listingClasses-line-header-items-endTime">H-fin</div>
      </div>
      <div className="listingClasses-line-header-rightside" />
    </div>
    {
      classes.map((item) => (
        <>
          <div className="listingClasses-line-container" key={item.id}>
            <div className="listingClasses-line-leftside">
              <div className="listingClasses-line-items-name">{item.name}</div>
              <div className="listingClasses-line-items-level"><div className="listing-line-items-level-cartouche">{item.level}</div></div>
              <div className="listingClasses-line-items-day">{item.day}</div>
              <div className="listingClasses-line-items-startTime">{moment(item.startDate).format('LT')}</div>
              <div className="listingClasses-line-items-endTime">{moment(item.endDate).format('LT')}</div>
            </div>
            <div className="listing-line-rightside">
              <span className="listingClasses-line-icon-message material-icons">email</span>
              <span className="listingClasses-line-icon-modify material-icons">border_color</span>
              <span className="listingClasses-line-icon-view material-icons">visibility</span>
              <span className="listingClasses-line-icon-delete material-icons">delete</span>
            </div>
          </div>
        </>
      ))
    }
  </div>
);
ListingClasses.propTypes = {
  classes: PropTypes.array.isRequired,
};
// == Export
export default ListingClasses;
