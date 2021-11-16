import './styles.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';

const SuperAdminAddActivity = ({
  name,
  picture,
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
          <h1>Ajouter d'une activité à l'association XXXXXXX</h1>
          <form className="dashboard-superadmin-event-add-form" onSubmit={handleActivitySubmit}>
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
            <button className="dashboard-superadmin-event-button" type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
};

SuperAdminAddActivity.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// == Export
export default SuperAdminAddActivity;
