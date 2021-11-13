import PropTypes from 'prop-types';
import moment from 'moment';
import { Link, useLocation } from 'react-router-dom';

import './styles.scss';
// == Composant
const ListingEvents = ({ events }) => {
  const path = useLocation();

  return (
    <div className="listingEvent-container">
      <div className="listingEvent-header">
        <div className="listingEvent-header-leftside">
          <div className="listingEvent-title"><h2>événements</h2></div>
          <Link to={`${path.pathname}/addEvent`} className="listingEvent-addIcon"><span className="material-icons">add</span></Link>
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
          <div className="listingEvent-line-header-maxParticipants">Max Participants</div>
        </div>
        <div className="listingEvent-line-header-rightside" />
      </div>
      { events.map((item) => (
        <div className="listingEvent-line-container" key={item.id}>
          <div className="listingEvent-line-leftside">
            <div className="listingEvent-line-items-name">{item.name}</div>
            <div className="listingEvent-line-items-place">{item.place}</div>
            <div className="listingEvent-line-items-startDate">{moment(item.startDate).format('DD/MM/YYYY')}</div>
            <div className="listingEvent-line-items-endDate">{moment(item.endDate).format('DD/MM/YYYY')}</div>
            <div className="listingEvent-line-items-schedule">{moment(item.schedule).format('LT')}</div>
            <div className="listingEvent-line-items-maxParticipants">{item.maxParticipants}</div>
          </div>
          <div className="listingEvent-line-rightside">
            <Link to={`${path.pathname}/event/${item.id}`} className="card-link"><span className="listingEvent-line-icon-view material-icons">visibility</span></Link>
            <span className="listingEvent-line-icon-delete material-icons">delete</span>
          </div>
        </div>
      ))}
    </div>
  );
};

ListingEvents.propTypes = {
  events: PropTypes.array.isRequired,
};
// == Export
export default ListingEvents;
