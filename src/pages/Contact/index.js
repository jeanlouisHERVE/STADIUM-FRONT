import './styles.scss';
import ButtonFormLogin from '../../components/ButtonFormLogin';
import Footer from '../../components/Footer';

// == Composant
const Contact = () => (
  <div className="Contact-container">
    <div className="Contact-UpPart">
      <div className="Contact-leftside">
        <div className="Contact-leftside-logo">
          <p>LOGO</p>
        </div>
      </div>
      <div className="Contact-rightside">
        <ButtonFormLogin />
        <div className="Contact-rightside-empty" />
        <div className="Contact-rightside-content">
          <h1 className="Contact-title">Contact</h1>
          <p className="Contact-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
          <p className="Contact-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
          <p className="Contact-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="Contact-rightside-empty" />
      </div>
    </div>
    <Footer />
  </div>
);

// == Export
export default Contact;
