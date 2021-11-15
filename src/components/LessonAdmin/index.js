import './styles.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

// == Composant
const LessonAdmin = ({ activities }) => {
  // const lesson = activities.lessons;
  // console.log(lesson);

  return (
    <div className="dashboard-admin-Lesson">
      <h1>Mes cours</h1>
      { activities && activities.map((activity, index) => index < 4 && (
        <>
          <div className="dashboard-admin-Lesson-container">
            <div className="dashboard-admin-Lesson-content">
              <div className="dashboard-admin-Lesson-title">
                <p>nom</p>
              </div>
              <div className="dashboard-admin-Lesson-text">
                <span className="material-icons">event</span>
                <p className="dashboard-admin-Lesson-StartDate">heure</p>
                <p className="dashboard-admin-Lesson-StartTime">heure</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

LessonAdmin.propTypes = {
  activities: PropTypes.array.isRequired,
};
// == Export
export default LessonAdmin;
