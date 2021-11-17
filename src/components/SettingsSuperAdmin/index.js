import { useState } from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import AsideNavbarSuperAdmin from '../AsideNavbarSuperAdmin';
import Field from '../Field';

import './styles.scss';

const SettingsSuperAdmin = ({
  email,
  password,
  testField1,
  testField2,
  updateField,
  handleSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubscriptionSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin">
        <AsideNavbarSuperAdmin />
        <div className="dashboard-superadmin-settings">
          <h1>Réglages du compte</h1>
          <form
            className=""
            onSubmit={handleSubscriptionSubmit}
          >

            <Field
              identifier="email"
              placeholder="email"
              label="Email"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={email}
            />

            <Field
              identifier="password"
              placeholder="Mot de passe"
              label="Mot de passe"
              type="password"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={password}
            />

            <Field
              identifier="testField1"
              placeholder="testField1"
              label="testField1"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={testField1}
            />

            <Field
              identifier="testField2"
              placeholder="testField2"
              label="TestField2"
              changeField={(identifier, newValue) => {
                updateField(newValue, identifier);
              }}
              value={testField2}
            />

            <button type="submit">Enregistrer</button>
          </form>
        </div>
      </div>
    </>
  );
};

SettingsSuperAdmin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  testField1: PropTypes.string.isRequired,
  testField2: PropTypes.string.isRequired,

  // 2 paramètres : nouvelle valeur, identifiant
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SettingsSuperAdmin;
