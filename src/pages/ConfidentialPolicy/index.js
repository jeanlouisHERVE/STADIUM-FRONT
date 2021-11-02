import './styles.scss';
import imageStade from '../../assets/images/imageStade.jpg';
import ButtonFormLogin from '../../components/ButtonFormLogin';
import Footer from '../../components/Footer';

// == Composant
const ConfidentialPolicy = () => (
  <div className="ConfidentialPolicy-container">
    <div className="ConfidentialPolicy-UpPart">
      <div className="ConfidentialPolicy-leftside">
        <ButtonFormLogin />
        <div className="ConfidentialPolicy-leftside-logo">
          <p>LOGO</p>
        </div>
        <div className="ConfidentialPolicy-leftside-content">
          <h1 className="ConfidentialPolicy-title">Politique de confidentialité</h1>
          <p className="ConfidentialPolicy-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
          <p className="ConfidentialPolicy-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
          <p className="ConfidentialPolicy-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="ConfidentialPolicy-leftside-empty" />
      </div>
      <div className="ConfidentialPolicy-rightside">
        <img src={imageStade} alt="" className="ConfidentialPolicy-rightside-picture" />
      </div>
    </div>
    <Footer />
  </div>
);

// == Export
export default ConfidentialPolicy;
