import { Link } from 'react-router-dom';
import './styles.scss';

const ButtonFormLogin = () => (
  <Link to="/connexion">
    <div className="button-wrapper-login">
      <button className="button-form-login" type="button">
        Connexion
      </button>
      <div className="button-border-login" />
    </div>
  </Link>
);

export default ButtonFormLogin;
