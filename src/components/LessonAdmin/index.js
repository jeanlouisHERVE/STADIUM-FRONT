import './styles.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

// == Composant
const LessonAdmin = ({ activities }) => {

  return (
    <div className="dashboard-admin-Lesson">
      <h1>Mes cours</h1>
        <>
          <div className="dashboard-admin-Lesson-container">
            <div className="dashboard-admin-Lesson-content">
              <div className="dashboard-admin-Lesson-title">
                <p>Natation</p>
              </div>
              <div className="dashboard-admin-Lesson-text">
                <span className="material-icons">event</span>
                <p className="dashboard-admin-Lesson-StartDate">15h00</p>
                <p className="dashboard-admin-Lesson-StartTime">16h00 </p>
              </div>
            </div>
          </div>
        </>
    </div>
  );
};

LessonAdmin.propTypes = {
  activities: PropTypes.array.isRequired,
};
// == Export
export default LessonAdmin;
