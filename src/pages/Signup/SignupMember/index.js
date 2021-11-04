import imageLogo from 'src/assets/images/imageLogo.png';

import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Field from '../../../components/Field';

import '../styles.scss';

const SignupMember = () => (
  <div className="signup-page">
    <div className="signup-header">
      <Link to="/" exact>
        <img src={imageLogo} alt="" className="imageLogo" />
      </Link>
    </div>
    <form
      className="signup-form"
      onSubmit={(event) => {
        event.preventDefault();
        // console.log('Submit actionned');
      }}
      handleSubmit={() => {
        // console.log('handleSubmit');
      }}
    >
      <h1>Inscription</h1>
      <Field
        identifier="name"
        placeholder="NOM"
        label="Nom de famille"
        // changeField={(identifier, newValue) => {
          // updateField(newValue, identifier);
        // }}
      />

      <Field
        identifier="firstname"
        placeholder="Prénom"
        label="Prénom"
        // changeField={(identifier, newValue) => {
          // updateField(newValue, identifier);
        // }}
      />

      <Field
        identifier="birthdate"
        placeholder="XX/XX/XXXX"
        label="Date de naissance"
        type="date"
        // changeField={(identifier, newValue) => {
          // updateField(newValue, identifier);
        // }}
      />

      <Field
        identifier="phone"
        placeholder="06.01.02.03.04"
        label="Numéro de téléphone"
        type="tel"
        // changeField={(identifier, newValue) => {
          // updateField(newValue, identifier);
        // }}
      />

      <Field
        identifier="address"
        placeholder="7, Rue des Adhérents"
        label="Addresse"
        // changeField={(identifier, newValue) => {
          // updateField(newValue, identifier);
        // }}
      />

      <Field
        identifier="zipCode"
        placeholder="75004"
        label="Code Postal"
        type="number"
        // changeField={(identifier, newValue) => {
          // updateField(newValue, identifier);
        // }}
      />

      <Field
        identifier="city"
        placeholder="Ennui-sur-Blasé"
        label="Ville"
        // changeField={(identifier, newValue) => {
          // updateField(newValue, identifier);
        // }}
      />

      <button type="submit" className="signup-submit">Inscription</button>
    </form>
  </div>
);

// SignupMember.propTypes = {
//   updateField: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };

export default SignupMember;
