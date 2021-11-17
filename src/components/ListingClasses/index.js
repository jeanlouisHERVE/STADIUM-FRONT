import moment from 'moment';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../utils/axios';
import './styles.scss';
import daysOfWeek from '../../utils/staticDatas/daysOfWeek';

// == Composant
const ListingClasses = ({
  activities,
  reloadData,
  sort,
  asort,
}) => {
  const path = useLocation();

  const deleteLessonItem = (id) => {
    api.delete(
      // URL
      `/api/v1/backoffice/superadmin/lessons/${id}`,
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
    <div className="listingClasses-container">
      {console.log(activities)}
      <div className="listingClasses-header">
        <div className="listingClasses-header-leftside">
          <div className="listingClasses-title"><h2>cours</h2></div>
          <Link to={`${path.pathname}/addLesson`} className="card-link"><span className="material-icons">add</span></Link>
        </div>
        <div className="listingClasses-header-rightside">
          <div className="listingClasses-filter">
            <button className="listingClasses-filter-button" type="submit" onClick={sort}>A - Z </button>
            <button className="listingClasses-filter-button" type="submit" onClick={asort}>Z - A</button>
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
        <div className="listingClasses-line-container" key={activity.id}>
          <div className="listingClasses-line-leftside">
            <div className="listingClasses-line-items-name">{activity.name}</div>
            { activity && activity.lessons
            && activity.lessons.map((lesson) => (
              <div className="listingClasses-line-classe-container" key={lesson.id}>
                <div className="listingClasses-line-items-level"><div className="listing-line-items-level-cartouche">{lesson.level}</div></div>
                <div className="listingClasses-line-items-day">{daysOfWeek[lesson.day]}</div>
                <div className="listingClasses-line-items-startTime">{moment(lesson.startDate).format('LT')}</div>
                <div className="listingClasses-line-items-endTime">{moment(lesson.endDate).format('LT')}</div>
              </div>
            ))}
          </div>
          <div className="listingClasses-line-rightside">
            <Link to={`${path.pathname}/lesson/${activity.id}`} className="card-link"><span className="listingClasses-line-icon-view material-icons">visibility</span></Link>
            <span
              className="listingClasses-line-icon-delete material-icons"
              onClick={() => {
                deleteLessonItem(activity.lesson.id);
              }}
            >delete
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

ListingClasses.propTypes = {
  activities: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  asort: PropTypes.func.isRequired,
  reloadData: PropTypes.func.isRequired,
};

// == Export
export default ListingClasses;
