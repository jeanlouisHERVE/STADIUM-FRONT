import { Link } from 'react-router-dom';
import './styles.scss';

const ButtonFormLogin = () => (
  <button className="btn-form-login" type="button">
    <Link to="/connexion">Connexion</Link>
  </button>
);

export default ButtonFormLogin;
