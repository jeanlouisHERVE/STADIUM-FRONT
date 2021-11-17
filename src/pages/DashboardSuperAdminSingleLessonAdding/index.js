import './styles.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../utils/axios';
import AsideNavbarSuperAdmin from '../../components/AsideNavbarSuperAdmin';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';
import FieldTime from '../../components/FieldTime';
import FieldDaySelector from '../../components/FieldDaySelector';
import FieldLevelSelector from '../../components/FieldLevelSelector';
import FieldActivitySelector from '../../components/FieldActivitySelector';
import daysOfWeekSelectorData from '../../utils/staticDatas/daysOfWeekSelectorData';

const SuperAdminAddLesson = ({
  level,
  startTime,
  endTime,
  day,
  place,
  activity,
  association,
  updateField,
  handleSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lessonData, setLessonData] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLessonSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit();
  };

  const pathArray = window.location.pathname.split('/');
  console.log(pathArray);

  useEffect(() => {
    async function loadData() {
      api.get(`/api/v1/backoffice/superadmin/associations/${pathArray[4]}`).then((response) => {
        setLessonData(response.data);
        // setIsLoaded(true);
      });
    }
    loadData();
  }, []);

  const { activities } = lessonData;

  useEffect(() => {
    updateField(association, 'association');
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-lesson-add">
        <div className="aside-navbar">
          <AsideNavbarSuperAdmin />
        </div>
        <div className="dashboard-superadmin-lesson-add-container">
          <h1>Ajout d'un cours</h1>
          <form className="dashboard-superadmin-lesson-add-form" onSubmit={handleLessonSubmit}>
            <FieldLevelSelector
              identifier="level"
              placeholder="Beginner"
              label="Niveau"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={level}
            />
            <FieldTime
              identifier="startTime"
              placeholder="14:00"
              label="Heure de début"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={startTime}
            />
            <FieldTime
              identifier="endTime"
              placeholder="15:00"
              label="Heure de fin"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={endTime}
            />
            <FieldDaySelector
              data={daysOfWeekSelectorData}
              identifier="level"
              placeholder="Lundi"
              label="Jour"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={Number(day)}
            />
            <Field
              identifier="place"
              placeholder="Scotland"
              label="Emplacement"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={place}
            />
            <FieldActivitySelector
              data={activities}
              identifier="activity"
              placeholder="3"
              label="Activité"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={Number(activity)}
            />
            <button className="dashboard-superadmin-lesson-button" type="submit">Envoyer</button>
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
  association: PropTypes.number.isRequired,
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// == Export
export default SuperAdminAddLesson;
