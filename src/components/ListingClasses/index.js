import moment from 'moment';
import PropTypes from 'prop-types';
import './styles.scss';
// == Composant
const ListingClasses = ({ activities }) => {
  const classes = activities.lessons;
  console.log(classes);

  return (
    <div className="listingClasses-container">
      {console.log(activities)}
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
      {activities.map((activity) => (
        <>
          <div className="listingClasses-line-container" key={activity.id}>
            <div className="listingClasses-line-leftside">
              <div className="listingClasses-line-items-name">{activity.name}</div>
              {/* { activities
              && classes.map((lesson) => (
                <div className="listingClasses-line-classe-container" key={lesson.id}>
                  <div className="listingClasses-line-items-level"><div className="listing-line-items-level-cartouche">{lesson.level}</div></div>
                  <div className="listingClasses-line-items-day">{lesson.day}</div>
                  <div className="listingClasses-line-items-startTime">{moment(lesson.startDate).format('LT')}</div>
                  <div className="listingClasses-line-items-endTime">{moment(lesson.endDate).format('LT')}</div>
                </div>
              ))}; */}
            </div>
            <div className="listing-line-rightside">
              <span className="listingClasses-line-icon-message material-icons">email</span>
              <span className="listingClasses-line-icon-modify material-icons">border_color</span>
              <span className="listingClasses-line-icon-view material-icons">visibility</span>
              <span className="listingClasses-line-icon-delete material-icons">delete</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

ListingClasses.propTypes = {
  activities: PropTypes.array.isRequired,
};
// == Export
export default ListingClasses;
