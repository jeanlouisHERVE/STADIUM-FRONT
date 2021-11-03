import PropTypes from 'prop-types';
import Field from '../../../components/Field';

import Logo from '../../../components/Logo';

import '../styles.scss';

const SignupMember = ({
  name,
  firstname,
  birthdate,
  phone,
  address,
  zipCode,
  city,
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
        <h1>Inscription</h1>
        <Field
          identifier="name"
          placeholder="NOM"
          label="Nom de famille"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={name}
        />

        <Field
          identifier="firstname"
          placeholder="Prénom"
          label="Prénom"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={firstname}
        />

        <Field
          identifier="birthdate"
          placeholder="XX/XX/XXXX"
          label="Date de naissance"
          type="date"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={birthdate}
        />

        <Field
          identifier="phone"
          placeholder="06.01.02.03.04"
          label="Numéro de téléphone"
          type="tel"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={phone}
        />

        <Field
          identifier="address"
          placeholder="7, Rue des Adhérents"
          label="Adresse"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={address}
        />

        <Field
          identifier="zipCode"
          placeholder="75004"
          label="Code Postal"
          type="number"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={zipCode}
        />

        <Field
          identifier="city"
          placeholder="Ennui-sur-Blasé"
          label="Ville"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={city}
        />

        <button type="submit" className="signup-submit">Inscription</button>
      </form>
    </div>
  );
};

SignupMember.propTypes = {
  name: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,

  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupMember;
