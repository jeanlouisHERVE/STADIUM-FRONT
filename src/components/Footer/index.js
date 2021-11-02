import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = () => (
  <div className="footer-content">
    <ul className="footer-content-list">
      <li className="footer-content-list-elem"><Link to="/legalMention">Mentions légales</Link></li>
      <li className="footer-content-list-elem"><Link to="/confidentialPolicy">Politique de confidentialité</Link></li>
      <li className="footer-content-list-elem"><Link to="/contact">Contact</Link></li>
    </ul>
    <p className="footer-copyright">&copy; Website by StadiumValkyries</p>
  </div>
);

export default Footer;
