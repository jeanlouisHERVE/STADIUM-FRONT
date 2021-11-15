import { Link } from 'react-router-dom';

import './styles.scss';
import Footer from '../../components/Footer';
import Gate from './gate.jpg';

// == Composant
const Error403 = () => (
  <div className="Error-container">
    <div className="Error-UpPart">
      <div className="Error-leftside" style={{ backgroundImage: `url(${Gate})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="Error-leftside-logo">
          <p>LOGO</p>
        </div>
      </div>
      <div className="Error-rightside">
        <div className="error">
          <h1 className="error-title">403</h1>
          <p className="error-text"> <em>Oups!</em> <br /> Vous n'avez pas accès à cette page </p>
          <button type="button" className="error-button">
            <Link to="/">Accueil</Link>
          </button>
          <button type="button" className="error-button">
            <Link to="/connexion">Connexion</Link>
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// == Export
export default Error403;
