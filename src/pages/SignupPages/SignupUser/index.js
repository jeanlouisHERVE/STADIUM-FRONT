import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from '../../../components/Field';

import Logo from '../../../components/Logo';

import '../styles.scss';

const SignupUser = ({
  email,
  password,
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
          identifier="email"
          placeholder="association@mail.com"
          label="Adresse mail de connexion"
          type="email"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={email}
        />
        <Field
          identifier="password"
          placeholder="Mot de passe"
          label="Mot de passe"
          type="password"
          changeField={(identifier, newValue) => {
            updateField(newValue, identifier);
          }}
          value={password}
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
};

SignupUser.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupUser;
