import './styles.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AsideNavbarSuperAdmin from '../../components/AsideNavbarSuperAdmin';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';

const SuperAdminAddActivity = ({
  name,
  picture,
  association,
  updateField,
  handleSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleActivitySubmit = (evt) => {
    evt.preventDefault();
    handleSubmit();
  };

  useEffect(() => {
    updateField(association, 'association');
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-activity-add">
        <div className="aside-navbar">
          <AsideNavbarSuperAdmin />
        </div>
        <div className="dashboard-superadmin-activity-add-container">
          <h1>Ajout d'une activité</h1>
          <form className="dashboard-superadmin-activity-add-form" onSubmit={handleActivitySubmit}>
            <Field
              identifier="name"
              placeholder="Judo"
              label="Nom"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={name}
            />
            <Field
              identifier="picture"
              placeholder="photo.jpeg"
              label="Photo"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={picture}
            />
            <button className="dashboard-superadmin-activity-button" type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
};

SuperAdminAddActivity.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  association: PropTypes.number.isRequired,
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// == Export
export default SuperAdminAddActivity;
