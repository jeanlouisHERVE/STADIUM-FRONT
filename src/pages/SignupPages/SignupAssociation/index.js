import imageLogo from 'src/assets/images/imageLogo.png';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from '../../../components/Field';

import '../styles.scss';

const SignupAssociation = ({
  associationName,
  presidentName,
  presidentFirstName,
  associationAddress,
  associationZipCode,
  associationTown,
  updateField,
  handleSubmit,
}) => {
  const handleSubscriptionSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <Link to="/">
          <img src={imageLogo} alt="" className="imageLogo" />
        </Link>
      </div>
      <form
        className="signup-form"
        onSubmit={handleSubscriptionSubmit}
      >
        <h1 className="signup-title">Association</h1>
        <Field
          identifier="associationName"
          placeholder="Tous aux jeux"
          label="Nom de l'association"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={associationName}
        />
        <Field
          identifier="presidentName"
          placeholder="JEAN"
          label="Nom du Président"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={presidentName}
        />

        <Field
          identifier="presidentFirstName"
          placeholder="Philippe"
          label="Prénom du Président"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={presidentFirstName}
        />

        <Field
          identifier="associationAddress"
          placeholder="11 rue du Bon Parmesan"
          label="Adresse de l'association"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={associationAddress}
        />

        <Field
          identifier="associationZipCode"
          placeholder="75000"
          label="Code Postal"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={associationZipCode}
        />

        <Field
          identifier="associationTown"
          placeholder="Paris"
          label="Ville"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={associationTown}
        />
        <button type="submit" className="signup-submit">Inscription</button>
      </form>
    </div>
  );
};

SignupAssociation.propTypes = {
  associationName: PropTypes.string.isRequired,
  presidentName: PropTypes.string.isRequired,
  presidentFirstName: PropTypes.string.isRequired,
  associationAddress: PropTypes.string.isRequired,
  associationZipCode: PropTypes.string.isRequired,
  associationTown: PropTypes.string.isRequired,
  // 2 paramètres : nouvelle valeur, identifiant
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupAssociation;
