import './styles.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';
import FieldTime from '../../components/FieldTime';
import FieldSelector from '../../components/FieldSelector';
import daysOfWeekSelectorData from '../../utils/data/daysOfWeekSelectorData';

const SuperAdminAddLesson = ({
  level,
  startTime,
  endTime,
  day,
  place,
  activity,
  updateField,
  handleSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLessonSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit();
  };

  // useEffect(() => {
  //   updateField(association, 'association');
  // }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-event-add">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <div className="dashboard-superadmin-event-add-container">
          <h1>Ajouter un cours à l'association XXXXXXX</h1>
          <form className="dashboard-superadmin-event-add-form" onSubmit={handleLessonSubmit}>
            <FieldSelector
              data={daysOfWeekSelectorData}
              identifier="level"
              placeholder="Beginner"
              label="Niveau"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={level}
            />
            <FieldTime
              identifier="startTime"
              placeholder="14:00"
              label="Heure de début"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={startTime}
            />
            <FieldTime
              identifier="endTime"
              placeholder="15:00"
              label="Heure de fin"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={endTime}
            />
            <Field
              // type="D - M - Y"
              identifier="day"
              placeholder="2"
              label="Jour"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={Number(day)}
            />
            <Field
              identifier="place"
              placeholder="Scotland"
              label="Emplacement"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={place}
            />
            <Field
              identifier="activity"
              placeholder="3"
              label="Activité"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={Number(activity)}
            />
            <button className="dashboard-superadmin-event-button" type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
};

SuperAdminAddLesson.propTypes = {
  level: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  activity: PropTypes.number.isRequired,
  place: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  // association: PropTypes.number.isRequired,
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// == Export
export default SuperAdminAddLesson;
