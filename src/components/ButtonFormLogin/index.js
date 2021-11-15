import { Link } from 'react-router-dom';
import './styles.scss';

const ButtonFormLogin = () => (
  <div className="btn-login">
    <button className="btn-form-login" type="button">
      <Link to="/connexion">Connexion</Link>
    </button>
    <div className="btn-form-login-border" />
  </div>

);

export default ButtonFormLogin;
