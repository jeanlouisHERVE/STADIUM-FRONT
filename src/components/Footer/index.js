import './styles.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-content">
    <div className="footer-content-list">
      <div className="footer-content-list-elem"><Link to="/legalMention">Mentions légales</Link></div>
      <div className="footer-content-list-elem"><Link to="/confidentialPolicy">Politique de confidentialité</Link></div>
      <div className="footer-content-list-elem"><Link to="/contact">Contact</Link></div>
    </div>
    <div className="footer-bottom-content">
      <p className="footer-copyright"> &copy; Website by StadiumValkyries</p>
    </div>
  </div>
);

export default Footer;
