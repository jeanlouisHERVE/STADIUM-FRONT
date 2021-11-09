import './styles.scss';
import { useState } from 'react';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';

const SuperAdminAddAdherent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-adherent-add">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <h1>DashboardSuperAdminAdherentADDING</h1>
        <div className="dashboard-superadmin-adherent-add-container">
          <Field
            identifier="lastName"
            placeholder="MAUVE"
            label="lastname"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={lastName}
          />
          <Field
            identifier="firstName"
            placeholder="Guy"
            label="firstname"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={firstName}
          />
          <Field
            identifier="dateOfBirth"
            placeholder="08/03/1980"
            label="dateOfBirth"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={dateOfBirth}
          />
          <Field
            identifier="address"
            placeholder="18 rue de la paix 78000 Versailles"
            label="address"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={address}
          />
          <Field
            identifier="phone"
            placeholder="0605040908"
            label="phone"
            changeField={(identifier, newValue) => {
              // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
              updateField(newValue, identifier);
            }}
            value={phone}
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
          <p>Liste des cours</p>
          <p>Liste des événements</p>
        </div>
      </div>
    </>
  );
};

// == Export
export default SuperAdminAddAdherent;
