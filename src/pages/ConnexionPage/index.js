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

const ConnexionPage = ({
  email,
  password,
  updateField,
  handleSubmit,
}) => (
  <div className="connexion-page">
    <form
      className="connexion-form"
      onSubmit={(event) => {
        event.preventDefault();
        // console.log('Submit actionned');
        handleSubmit();
      }}
    >
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
      <button type="submit" className="settings-submit">Envoyer</button>
    </form>
  </div>
);

ConnexionPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  // 2 paramètres : nouvelle valeur, identifiant
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ConnexionPage;
