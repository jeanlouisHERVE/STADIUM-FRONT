import './styles.scss';
import PropTypes from 'prop-types';
import moment from 'moment';
import Stade from './imageStade.jpg';

// == Composant
const EventAdmin = ({ events }) => (
  <div className="dashboard-admin-Event">
    <h1>Mes événements</h1>
    { events && events.map((event, index) => index < 4 && (
      <>
        <div className="dashboard-admin-Event-container">
          <img className="dashboard-admin-Event-UserPicture" src={Stade} alt="" />
          <div className="dashboard-admin-Event-content">
            <div className="dashboard-admin-Event-title">
              <p>{event.name}</p>
            </div>
            <div className="dashboard-admin-Event-text">
              <span className="material-icons">event</span>
              <p className="dashboard-admin-Event-StartDate">{moment(event.startDate).format('DD/MM/YYYY')}</p>
              <p className="dashboard-admin-Event-StartTime">à {moment(event.schedule).format('LT')}</p>
            </div>
          </div>
        </div>
      </>
    ))}
  </div>
);

EventAdmin.propTypes = {
  events: PropTypes.array.isRequired,
};
// == Export
export default EventAdmin;
