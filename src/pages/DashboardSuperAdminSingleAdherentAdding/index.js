import './styles.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../utils/axios';
import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Field from '../../components/Field';
import FieldUserSelector from '../../components/FieldUserSelector';

const SuperAdminAddAdherent = ({
  firstname,
  lastname,
  picture,
  accountId,
  association,
  updateField,
  handleSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const path = useLocation();
  console.log(path.pathname);
  const pathArray = window.location.pathname.split('/');
  console.log(pathArray);

  async function loadData() {
    api.get('/api/v1/backoffice/superadmin/accounts/adherents').then((response) => {
      setUsersData(response.data);
      // setIsLoaded(true);
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  // useEffect(() => {
  //   updateField(association, 'association');
  // }, []);

  const handleAdherentSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin-adherent-add">
        <div className="aside-navbar">
          <AsideNavbar />
        </div>
        <div className="dashboard-superadmin-adherent-add-container">
          <h1>Ajout d'un adhérent</h1>
          <form className="dashboard-superadmin-adherent-add-form" onSubmit={handleAdherentSubmit}>
            <Field
              identifier="lastname"
              placeholder="MAUVE"
              label="Nom"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={lastname}
            />
            <Field
              identifier="firstname"
              placeholder="Guy"
              label="Prénom"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={firstname}
            />
            <Field
              identifier="picture"
              placeholder="picture23.jpeg"
              label="Photo"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={picture}
            />
            <FieldUserSelector
              data={usersData}
              identifier="accountId"
              placeholder="John DOE"
              label="Utilisateur"
              changeField={(identifier, newValue) => {
                // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
                updateField(newValue, identifier);
              }}
              value={accountId}
            />
            <button className="dashboard-superadmin-adherent-button" type="submit" onClick={updateField(association, 'association')}>Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
};

SuperAdminAddAdherent.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  accountId: PropTypes.string.isRequired,
  association: PropTypes.number.isRequired,
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
// == Export
export default SuperAdminAddAdherent;
