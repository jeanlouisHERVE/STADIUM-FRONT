import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const ListingEvents = ({ events }) => (
  <div className="listing-container">
    <div className="listing-header">
      <div className="listing-header-leftside">
        <div className="listing-title"><h2>Evénements</h2></div>
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
        <div className="listing-line-header-items">Niveau</div>
        <div className="listing-line-header-items">Jour</div>
        <div className="listing-line-header-items">H-début</div>
        <div className="listing-line-header-items">H-fin</div>
      </div>
      <div className="listing-line-header-rightside" />
    </div>
    {
      events.map((item, index) => (
        <>
          <div className="listing-line-container" key={item.id}>
            <div className="listing-line-leftside">
              <div className="listing-line-items level">{item.level}</div>
              <div className="listing-line-items day">{item.day}</div>
              <div className="listing-line-items startTime">{item.startTime}</div>
              <div className="listing-line-items endTime">{item.endTime}</div>
            </div>
            <div className="listing-line-rightside">
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

ListingEvents.propTypes = {
  events: PropTypes.array.isRequired,
};

// == Export
export default ListingEvents;
