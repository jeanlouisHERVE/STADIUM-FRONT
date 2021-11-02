import imageLogo from 'src/assets/images/imageLogo.png';

import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Field from '../../../components/Field';

import '../styles.scss';

const SignupAssociation = (
  associationName,
  presidentName,
  presidentFirstName,
  associationAdress,
  associationZipCode,
  associationTown,

) => (
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
      <h1 className="signup-title">Association</h1>
      <Field
        identifier="association-name"
        placeholder="Tous aux jeux"
        label="Nom de l'association"
        // changeField={(identifier, newValue) => {
        //   console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
        //   updateField(newValue, identifier);
        // }}
        value={associationName}
      />
      <Field
        identifier="president-name"
        placeholder="JEAN"
        label="Nom du Président"
        // changeField={(identifier, newValue) => {
        //   console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
        //   updateField(newValue, identifier);
        // }}
        value={presidentName}
      />

      <Field
        identifier="president-firstname"
        placeholder="Philippe"
        label="Prénom du Président"
        // changeField={(identifier, newValue) => {
        //   console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
        //   updateField(newValue, identifier);
        // }}
        value={presidentFirstName}
      />

      <Field
        identifier="association-adress"
        placeholder="11 rue du Bon Parmesan"
        label="Adresse de l'association"
        // changeField={(identifier, newValue) => {
        //   console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
        //   updateField(newValue, identifier);
        // }}
        value={associationAdress}
      />

      <Field
        identifier="association-zipCode"
        placeholder="75000"
        label="Code Postal"
        // changeField={(identifier, newValue) => {
        //   console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
        //   updateField(newValue, identifier);
        // }}
        value={associationZipCode}
      />

      <Field
        identifier="association-town"
        placeholder="Paris"
        label="Ville"
        // changeField={(identifier, newValue) => {
        //   console.log(`changeField : identifier=${identifier}, newValue=${newValue}`);
        //   updateField(newValue, identifier);
        // }}
        value={associationTown}
      />
      <button type="submit" className="signup-submit">Inscription</button>
    </form>
  </div>
);

SignupAssociation.propTypes = {
  associationName: PropTypes.string.isRequired,
  presidentName: PropTypes.string.isRequired,
  presidentFirstName: PropTypes.string.isRequired,
  associationAdress: PropTypes.string.isRequired,
  associationZipCode: PropTypes.number.isRequired,
  associationTown: PropTypes.string.isRequired,
  // 2 paramètres : nouvelle valeur, identifiant
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupAssociation;
