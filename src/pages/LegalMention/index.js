import './styles.scss';
import imageStade from '../../assets/images/imageStade.jpg';
import Logo from '../../components/Logo';
import ButtonFormLogin from '../../components/ButtonFormLogin';
import Footer from '../../components/Footer';

// == Composant
const LegalMention = () => (
  <div className="LegalMention-container">
    <div className="LegalMention-UpPart">
      <div className="LegalMention-leftside">
        <Logo />
        <ButtonFormLogin />
        <div className="LegalMention-leftside-content">
          <h1 className="LegalMention-title">Mentions Légales</h1>
          <p className="LegalMention-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
          <p className="LegalMention-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
          <p className="LegalMention-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="LegalMention-leftside-empty" />
      </div>
      <div className="LegalMention-rightside">
        <img src={imageStade} alt="" className="LegalMention-rightside-picture" />
      </div>
    </div>
    <Footer />
  </div>
);

// == Export
export default LegalMention;
