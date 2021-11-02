import { Link } from 'react-router-dom';
import imageLogo from '../../assets/images/Logo.svg';

import './styles.scss';

const Logo = () => (
  <Link to="/">
    <div className="logo-wrapper">
      <img src={imageLogo} alt="" className="logo-image" />
      <p className="logo-text">stadium</p>
    </div>
  </Link>
);

export default Logo;
