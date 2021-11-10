import './styles.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';

const SuperAdminAddEvent = ({
  name,
  startDate,
  schedule,
  endDate,
  place,
  maxParticipant,
  association,
  updateField,
  handleSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleEventSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-event-add">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <div className="dashboard-superadmin-event-add-container">
          <h1>DashboardSuperAdminEventADDING</h1>
          <form className="dashboard-superadmin-event-add-form" onSubmit={handleEventSubmit}>
            <Field
              identifier="name"
              placeholder="Coupe de Quidditch"
              label="Nom"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={name}
            />
            <Field
              identifier="startDate"
              placeholder="20/08/2021"
              label="Date de début"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={startDate}
            />
            <Field
              identifier="schedule"
              placeholder="14:00"
              label="Heure de début"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={schedule}
            />
            <Field
              type="D - M - Y"
              identifier="endDate"
              placeholder="21/08/2021"
              label="Date de fin"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={endDate}
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
              identifier="maxParticipant"
              placeholder="92"
              label="Nombre de participants maximum"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={maxParticipant}
            />
            <Field
              identifier="association"
              placeholder="1"
              label="association"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={association}
            />
            <button className="dashboard-superadmin-event-button" type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
};

SuperAdminAddEvent.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  maxParticipant: PropTypes.bool.isRequired,
  association: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// == Export
export default SuperAdminAddEvent;
