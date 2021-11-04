import PropTypes from 'prop-types';
import './styles.scss';
// == Composant
const ListingEvents = ({ events }) => (
  <div className="listingEvent-container">
  {console.log(events)}
    <div className="listingEvent-header">
      <div className="listingEvent-header-leftside">
        <div className="listingEvent-title"><h2>événements</h2></div>
        <div className="listingEvent-addIcon"><span className=" material-icons">add</span></div>
      </div>
      <div className="listingEvent-header-rightside">
        <div className="listingEvent-filter">
          <button className="listingEvent-filter-button" type="submit"><span className="material-icons">date_range</span></button>
          <button className="listingEvent-filter-button" type="submit">A - Z</button>
        </div>
      </div>
    </div>
    <div className="listingEvent-line-header">
      <div className="listingEvent-line-header-leftside">
        <div className="listingEvent-line-header-name">Nom</div>
        <div className="listingEvent-line-header-place">Emplacement</div>
        
        <div className="listingEvent-line-header-startDate">Date-début</div>
        <div className="listingEvent-line-header-endDate">Date-Fin</div>
        <div className="listingEvent-line-header-schedule">Heure</div>
        <div className="listingEvent-line-header-maxParticipants">Participants</div>
      </div>
      <div className="listingEvent-line-header-rightside" />
    </div>
    { events.map((item) => (
      <div className="listingEvent-line-container">
        <div className="listingEvent-line-leftside">
          <div className="listingEvent-line-items-name">{item.name}</div>
          <div className="listingEvent-line-items-place">{item.place}</div>
          <div className="listingEvent-line-items-startDate">{item.startDate}</div>
          <div className="listingEvent-line-items-endDate">{item.endDate}</div>
          <div className="listingEvent-line-items-schedule">{item.schedule}</div>
          <div className="listingEvent-line-items-maxParticipants">{item.maxParticipants}</div>
        </div>
        <div className="listingEvent-line-rightside">
          <span className="listingEvent-line-icon material-icons">email</span>
          <span className="listingEvent-line-icon material-icons">border_color</span>
          <span className="listingEvent-line-icon material-icons">visibility</span>
          <span className="listingEvent-line-icon material-icons">delete</span>
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
