import imageLogo from 'src/assets/images/imageLogo.png';

import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Field from '../../../components/Field';

import '../styles.scss';

const SignupUser = () => (
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
        identifier="email"
        placeholder="association@mail.com"
        label="Addresse mail de connexion"
        type="email"
        // changeField={(identifier, newValue) => {
          // updateField(newValue, identifier);
        // }}
      />
      <Field
        identifier="password"
        placeholder="Mot de passe"
        label="Mot de passe"
        type="password"
        // changeField={(identifier, newValue) => {
        //   updateField(newValue, identifier);
        // }}
      />

      <div className="signup-dispatch">
        <h1 className="signup-title">Vous êtes :</h1>
        <div className="signup-buttons">
          <button type="submit" className="signup-submit">
            <Link to="/inscription/adherent">Un adhérent</Link>
          </button>
          <button type="submit" className="signup-submit">
            <Link to="/inscription/association">Une association</Link>
          </button>
        </div>
      </div>
    </form>
  </div>
);

// SignupUser.propTypes = {
//   updateField: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };

export default SignupUser;
