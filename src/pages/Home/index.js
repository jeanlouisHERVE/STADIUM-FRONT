import { Link } from 'react-router-dom';

// import assets
import dashboardUser from '../../assets/images/dashboardUser.png';
import imageStade from '../../assets/images/imageStade.jpg';
import imageLogo from '../../assets/images/imageLogo.png';

import ButtonFormLogin from '../../components/ButtonFormLogin';
import ButtonFormSubscribe from '../../components/ButtonFormSubscribe';
import Footer from '../../components/Footer';

import './styles.scss';

// == Composant
const Home = () => (
  <>
    <div className="home"> {/** ok */}

      <div className="home-content">{/** ok */}
        <div className="part-registration">{/** ok */}
          <h1 className="part-registration-title"> Stadium est la solution simple, pratique et gratuite au service de la vie associative. </h1>
          <p className="part-registration-text">
            Rejoignez un réseau d'associations sportives, présentes partout en France.<br />
            Inscrivez-vous pour bénéficiez d'un service de qualité et optimisé pour vous
            faciliter le quotidien.
          </p>
          <div className="part-registration-btn-subscribe">
            <Link to="/inscription"> <ButtonFormSubscribe /> </Link>
          </div>
        </div>{/** ok */}

        <div className="part-connexion">{/** ok */}
          <img src={imageStade} alt="" className="stadium-img" />
        </div>{/** ok */}
        <div className="home-header-header">{/** ok */}
          <div className="part-registration-logo">{/** ok */}
            <Link to="/">
              <img src={imageLogo} alt="" className="imageLogo" />
            </Link>
          </div>{/** ok */}
          <div className="part-connexion-btn">{/** ok */}
            <Link to="/connexion"> <ButtonFormLogin /> </Link>
          </div>{/** ok */}
        </div>{/** ok */}
      </div>{/** ok */}
      <div className="part-association"> {/** ok */}
        <div className="part-association-title"> {/** ok */}
          <h1 className="part-association-title-title"> <strong> Vous êtes une association? </strong> <br /> Stadium est la solution simple, pratique et gratuite au service de la vie associative. </h1>
        </div> {/** ok */}
        <div className="part-association-content"> {/** ok */}
          <div className="part-association-content-content"> {/** ok */}
            <p className="part-association-text"> Stadium vous permet de dématérialiser entièrement la gestion de vos contrats d'adhérents.</p>
            <p className="part-association-text"> Opter pour Stadium, c'est choisir de se simplifier la vie face aux tâches administratives et chronophages que représente la gestion de centaines voir de milliers de contrats. </p>
            <p className="part-association-text"> Notre plateforme est un outil qui vous permet de réaliser un panel de tâches de façon simple et intuitive : </p>
            <ul>
              <li className="part-association-text-elem-list"> gestion des membres,</li>
              <li className="part-association-text-elem-list"> adhésion en ligne,</li>
              <li className="part-association-text-elem-list"> gestion du planning de cours,</li>
              <li className="part-association-text-elem-list"> gestion de la communication sur vos évènements,</li>
              <li className="part-association-text-elem-list"> site internet </li>
            </ul>
            <p className="part-association-text"> Stadium permet aux associations de gagner du temps dans leur gestion quotidienne afin de se concentrer sur le développement de leur activité. </p>
            <p className="part-association-text"> L’inscription sur la plateforme permet automatiquement à une association d’avoir un site internet accessible et visible par tous les membres de Stadium.</p>
            <p className="part-association-text"> Stadium réunit sur sa plateforme tant les associations que les personnes en recherche d’une activité sportive. De quoi gagner en visibilité et se faire connaître. </p>
          </div>{/** ok */}
          <div className="part-association-img">{/** ok */}
            <img src={dashboardUser} alt="" className="dashboard-association-img" />
          </div>{/** ok */}
          <div className="part-association-btn-subscribe"> <Link to="/inscription"> <ButtonFormSubscribe /> </Link> </div>
        </div>{/** ok */}
      </div>{/** ok */}
      <div className="part-user">{/** ok */}
        <div className="part-user-title">{/** ok */}
          <h1 className="part-user-title-title"> <strong> Vous êtes un adhérent?</strong> <br /> Stadium est la solution simple, pratique et gratuite pour suivre votre association et vos activités. </h1>
        </div>{/** ok */}
        <div className="part-user-content">{/** ok */}
          <div className="part-user-content-content">{/** ok */}
            <p className="part-user-text"> Inscrivez-vous sur Stadium et : </p>
            <ul>
              <li className="part-user-text-elem-list"> Retrouvez facilement les associations sportives autour de chez vous,</li>
              <li className="part-user-text-elem-list">Inscrivez-vous à vos activités favorites depuis votre domicile, </li>
              <li className="part-user-text-elem-list"> Gérer vos contrats à distance,</li>
              <li className="part-user-text-elem-list"> Renseignez-vous et inscrivez-vous aux évènements qui vous intéressent en un clic.</li>
            </ul>
          </div>{/** ok */}
          <div className="part-user-img">{/** ok */}
            <img src={dashboardUser} alt="" className="dashboard-user-img" />
          </div>{/** ok */}
          <div className="part-user-btn-subscribe"> <Link to="/inscription"> <ButtonFormSubscribe /> </Link> </div>
        </div>{/** ok */}
      </div>{/** ok */}
    </div>
    <div className="footer">
      <Footer />
    </div>
  </>
);

// == Export
export default Home;
