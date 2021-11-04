import PropTypes from 'prop-types';
import './styles.scss';
// == Composant
const ListingEvents = ({ events }) => (
  <div className="listing-container">
  {console.log(events)};
    <div className="listing-header">
      <div className="listing-header-leftside">
        <div className="listing-title"><h2>événements</h2></div>
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
    { events.map((item) => (
      <div className="listing-line-container">
        <div className="listing-line-leftside">
          <div className="listing-line-items-name">{item.name}</div>
          <div className="listing-line-items-place">{item.place}</div>
          <div className="listing-line-items-startDate">{item.startDate}</div>
          <div className="listing-line-items-endDate">{item.endDate}</div>
          <div className="listing-line-items-schedule">{item.schedule}</div>
          <div className="listing-line-items-maxParticipants">{item.maxParticipants}</div>
        </div>
        <div className="listing-line-rightside">
          <span className="listing-line-icon material-icons">email</span>
          <span className="listing-line-icon material-icons">border_color</span>
          <span className="listing-line-icon material-icons">visibility</span>
          <span className="listing-line-icon material-icons">delete</span>
        </div>
      </div>
    ))}
  </div>
);
ListingEvents.propTypes = {
  events: PropTypes.array.isRequired,
};
// == Export
export default ListingEvents;
