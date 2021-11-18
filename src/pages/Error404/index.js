import { Link } from 'react-router-dom';

import './styles.scss';
import Footer from '../../components/Footer';
import Railway from './railway.jpg';

// == Composant
const Error404 = () => (
  <div className="Error-container">
    <div className="Error-UpPart">
      <div className="Error-leftside" style={{ backgroundImage: `url(${Railway})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="Error-leftside-logo">
          <p>LOGO</p>
        </div>
      </div>
      <div className="Error-rightside">
        <div className="error">
          <h1 className="error-title">404</h1>
          <p className="error-text"> <em>Oups!</em> <br /> Cette page n'existe pas</p>
          <button type="button" className="error-button">
            <Link to="/backoffice/superadmin/associations">Retour au tableau de bord</Link>
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// == Export
export default Error404;
