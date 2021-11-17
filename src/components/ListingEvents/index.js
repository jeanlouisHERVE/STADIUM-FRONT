import PropTypes from 'prop-types';
import moment from 'moment';
import { Link, useLocation } from 'react-router-dom';
import api from '../../utils/axios';
import './styles.scss';

// == Composant
const ListingEvents = ({ events, reloadData, sortDate }) => {
  const path = useLocation();

  const deleteEventItem = (id) => {
    api.delete(
      // URL
      `/api/v1/backoffice/superadmin/events/${id}`,
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
    <div className="listingEvent-container">
      <div className="listingEvent-header">
        <div className="listingEvent-header-leftside">
          <div className="listingEvent-title"><h2>événements</h2></div>
          <Link to={`${path.pathname}/addEvent`} className="listingEvent-addIcon"><span className="material-icons">add</span></Link>
        </div>
        <div className="listingEvent-header-rightside">
          <div className="listingEvent-filter">
            <button className="listingEvent-filter-button" type="submit" onClick={sortDate}><span className="material-icons">date_range</span></button>
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
        // <ListingItem  itemInfos={{
        //   name: item.name,
        //   place: item.place
        // }}/>
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
            <Link to={`${path.pathname}/event/${item.id}/modify`} className="card-link"><span className="listingEvent-line-icon-view material-icons">mode_edit</span></Link>
            <span
              className="listingEvent-line-icon-delete material-icons"
              onClick={() => {
                deleteEventItem(item.id);
              }}
            >delete
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

ListingEvents.propTypes = {
  events: PropTypes.array.isRequired,
  reloadData: PropTypes.func.isRequired,
  sortDate: PropTypes.func.isRequired,
};
// == Export
export default ListingEvents;
