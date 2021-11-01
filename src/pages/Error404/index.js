
import './styles.scss';
import ButtonFormLogin from '../../components/ButtonFormLogin';
import Footer from '../../components/Footer';
import Railway from './railway.jpg';

// == Composant
const Contact = () => (
  <div className="Error-container">
    <div className="Error-UpPart">
      <div className="Error-leftside" style={{ backgroundImage: `url(${Railway})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="Error-leftside-logo">
          <p>LOGO</p>
        </div>
      </div>
      <div className="Error-rightside">
        <ButtonFormLogin />
        <div className="Error-rightside-empty" />
        <div className="Error-rightside-content">
          <h1>Erreur 404</h1>
          <h2>La page que vous recherchez n'existe pas encore...</h2>
          <input
            className="button"
            type="button"
            value="Accueil"
            onClick=""
          />
        </div>
        <div className="Error-rightside-empty" />
      </div>
    </div>
    <Footer />
  </div>
);

// == Export
export default Contact;
