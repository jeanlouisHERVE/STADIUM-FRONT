import './styles.scss';
import ButtonFormLogin from '../../components/ButtonFormLogin';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import Sailing from './sailing.jpg';

// == Composant
const Contact = () => (
  <div className="Contact-container">
    <div className="Contact-UpPart">
      <div className="Contact-leftside" style={{ backgroundImage: `url(${Sailing})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="Contact-leftside-logo">
          <p>LOGO</p>
        </div>
      </div>
      <div className="Contact-rightside">
        <ButtonFormLogin />
        <div className="Contact-rightside-empty" />
        <div className="Contact-rightside-content">
          <ContactForm />
        </div>
        <div className="Contact-rightside-empty" />
      </div>
    </div>
    <Footer />
  </div>
);

// == Export
export default Contact;
