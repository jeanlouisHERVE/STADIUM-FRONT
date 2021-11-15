import { Link } from 'react-router-dom';

import './styles.scss';

const ButtonFormSubscribe = () => (
  <Link to="/inscription">
    <div className="button-wrapper">
      <button className="button-form-subscribe" type="button">
        Inscription
      </button>
      <div className="button-border" />
    </div>
  </Link>
);

export default ButtonFormSubscribe;
