import imageLogo from '../../assets/Logo.svg';

import './styles.scss';

const Logo = () => (
  <div className="logo-wrapper">
    <img src={imageLogo} alt="" className="logo-image" />
    <p className="logo-text">stadium</p>
  </div>
);

export default Logo;
