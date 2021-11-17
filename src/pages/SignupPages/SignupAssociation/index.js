import PropTypes from 'prop-types';
import Field from '../../../components/Field';

import Logo from '../../../components/Logo';

import '../styles.scss';

const SignupAssociation = ({
  // associationName,
  // presidentName,
  // presidentFirstName,
  // associationAddress,
  // associationZipCode,
  // associationTown,

  name,
  presidentLastName,
  presidentFirstName,
  address,
  phoneNumber,

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
        <Logo />
      </div>
      <form
        className="signup-form"
        onSubmit={handleSubscriptionSubmit}
      >
        <h1 className="signup-title">Association</h1>
        <Field
          identifier="name"
          placeholder="Tous aux jeux"
          label="Nom de l'association"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={name}
        />
        <Field
          identifier="presidentLastName"
          placeholder="JEAN"
          label="Nom du Président"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={presidentLastName}
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
          identifier="address"
          placeholder="11 rue du Bon Parmesan"
          label="Adresse de l'association"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={address}
        />

        <Field
          identifier="phoneNumber"
          placeholder="75000"
          label="Code Postal"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={phoneNumber}
        />

        {/* <Field
          identifier="associationTown"
          placeholder="Paris"
          label="Ville"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={associationTown}
        /> */}
        <button type="submit" className="signup-submit">Inscription</button>
      </form>
    </div>
  );
};

SignupAssociation.propTypes = {
  name: PropTypes.string.isRequired,
  presidentLastName: PropTypes.string.isRequired,
  presidentFirstName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  // associationTown: PropTypes.string.isRequired,
  // 2 paramètres : nouvelle valeur, identifiant
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupAssociation;
