import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

// == Composant
const ListingActivities = ({ activities }) => {
  const path = useLocation();

  return (
    <div className="listingActivity-container">
      <div className="listingActivity-header">
        <div className="listingActivity-header-leftside">
          <div className="listingActivity-title"><h2>Activités</h2></div>
          <Link to={`${path.pathname}/addActivity`} className="listingActivity-addIcon"><span className=" material-icons">add</span></Link>
        </div>
        <div className="listingActivity-header-rightside">
          <div className="listingActivity-filter">
            <button className="listingActivity-filter-button" type="button">A - Z</button>
            <button className="listingActivity-filter-button" type="submit">Z - A</button>
          </div>
        </div>
      </div>
      <div className="listingActivity-line-header">
        <div className="listingActivity-line-header-leftside">
          <div className="listingActivity-line-header-items">Discipline</div>
        </div>
        <div className="listingActivity-line-header-rightside" />
      </div>
      { activities
      && activities.map((activity) => (
        <div className="listingActivity-line-container" key={activity.id}>
          <div className="listingActivity-line-leftside">
            <div className="listingActivity-line-items lastname">{activity.name}</div>
          </div>
          <div className="listingActivity-line-rightside">
            <Link to={`${path.pathname}/activity/${activity.id}`} className="card-link"><span className="listingActivity-line-icon-view material-icons">visibility</span></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

ListingActivities.propTypes = {
  activities: PropTypes.array.isRequired,
};

// == Export
export default ListingActivities;
