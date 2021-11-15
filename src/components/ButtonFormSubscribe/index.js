import { Link } from 'react-router-dom';
import './styles.scss';

const ButtonFormSubscribe = () => (
  <div className="btn-subscribe">
    <button className="btn-form-subscribe" type="button">
      <Link to="/inscription">Inscription</Link>
    </button>
    <div className="btn-form-subscribe-border" />
  </div>

);

export default ButtonFormSubscribe;
