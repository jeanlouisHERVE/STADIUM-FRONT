<<<<<<< HEAD
import imageLogo from 'src/assets/images/imageLogo.png';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from '../../components/Field';

import './styles.scss';

/*
Objectif : valider les identifiants de l'utilisateur
- détecter la soumission du formulaire au niveau du store => action
- faire appel à une API pour valider les informations (comment faire avec un store
  Redux ?)
- (bonus) réserver la saisie de messages aux utilisateurs authentifiés
*/

const RegistrationPage = ({
  email,
  password,
  updateField,
  handleSubmit,
}) => (
  <div className="Registration-page">
    <div className="Registration-header">
      <Link to="/">
        <img src={imageLogo} alt="" className="imageLogo" />
      </Link>
    </div>
    <form
      className="Registration-form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Submit actionned');
        handleSubmit();
      }}
    >
      <h1>Se connecter</h1>
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
      <Field
        identifier="password"
        placeholder="mot de passe"
        label="Mot de passe"
        type="password"
        changeField={(identifier, newValue) => {
          // console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
          updateField(newValue, identifier);
        }}
        value={password}
      />
      <button type="submit" className="Registration-submit">Connexion</button>
    </form>
  </div>
);

RegistrationPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  // 2 paramètres : nouvelle valeur, identifiant
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default RegistrationPage;
=======
>>>>>>> loginPage
