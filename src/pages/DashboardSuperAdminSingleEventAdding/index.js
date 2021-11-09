import './styles.scss';
import { useState } from 'react';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';

const SuperAdminAddEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-event-add">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <h1>DashboardSuperAdminEventADDING</h1>
        <div className="dashboard-superadmin-event-add-container">
          <Field
            identifier="name"
            placeholder="Coupe de Quidditch"
            label="name"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={name}
          />
          <Field
            identifier="startDate"
            placeholder="20/08/2021"
            label="startDate"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={startDate}
          />
          <Field
            identifier="schedule"
            placeholder="14:00"
            label="schedule"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={schedule}
          />
          <Field
            identifier="endDate"
            placeholder="21/08/2021"
            label="endDate"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={endDate}
          />
          <Field
            identifier="place"
            placeholder="Scotland"
            label="place"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={place}
          />
          <Field
            identifier="email"
            placeholder="jean_michel@oclock.io"
            label="E-mail"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={email}
          />
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminAddEvent;
