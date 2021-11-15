// import assets
import dashboardUser from '../../assets/images/dashboardUser.png';
import imageStade from '../../assets/images/imageStade.jpg';

import Logo from '../../components/Logo';
import ButtonFormLogin from '../../components/ButtonFormLogin';
import ButtonFormSubscribe from '../../components/ButtonFormSubscribe';
import Footer from '../../components/Footer';

import './styles.scss';

// == Composant
const Home2 = () => (
  <div className="home">
    <div className="wrapper-top">
      <Logo />
      <div className="wrapper-top-left">
        <h1 className="wrapper-top-left-title">
          Stadium est la solution simple, pratique et gratuite au service de la vie associative.
        </h1>
        <p className="wrapper-top-left-text">
          Rejoignez un réseau d'associations sportives, présentes partout en France.<br />
          Inscrivez-vous pour bénéficiez d'un service de qualité et optimisé pour vous
          faciliter le quotidien.
        </p>
        <ButtonFormSubscribe />
      </div>
      <div className="wrapper-top-right">
        <ButtonFormLogin />
        <img src={imageStade} alt="" className="wrapper-top-right-img" />
      </div>
    </div>
    <div className="wrapper-mid">
      <div className="wrapper-mid-header">
        <h1 className="wrapper-mid-header-title">
          <strong>Vous êtes une association ?</strong><br />
          Stadium est la solution simple, pratique et gratuite pour suivre votre association
          et vos activités.
        </h1>
      </div>
      <div className="wrapper-mid-content">
        <div className="wrapper-mid-left">
          <img src={dashboardUser} alt="" className="wrapper-mid-left-img" />
        </div>
        <div className="wrapper-mid-right">
          <p className="wrapper-mid-right-text">
            Stadium permet aux associations de gagner du temps dans leur gestion quotidienne afin de
            se concentrer sur le développement de leur activité. L’inscription sur la plateforme
            permet automatiquement à une association d’avoir un site internet accessible et visible
            par tous les membres de Stadium. Stadium réunit sur sa plateforme tant les associations
            que les personnes en recherche d’une activité sportive. De quoi gagner en visibilité et
            se faire connaître.
          </p>
          <ul>
            <li> gestion des membres,</li>
            <li> adhésion en ligne,</li>
            <li> gestion du planning de cours,</li>
            <li> gestion de la communication sur vos évènements,</li>
            <li> site internet </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="wrapper-bot">
      <div className="wrapper-bot-header">
        <h1 className="wrapper-bot-header-title">
          <strong> Vous êtes un adhérent ? </strong><br />
          Stadium est la solution simple, pratique et gratuite au service de la vie associative.
        </h1>
      </div>
      <div className="wrapper-bot-content">
        <div className="wrapper-bot-content-left">
          <p className="wrapper-bot-content-left-text">
            Inscrivez-vous sur Stadium et :
          </p>
          <p className="wrapper-bot-content-left-text">
            Retrouvez facilement une association sportive près de chez vous.
          </p>
          <p className="wrapper-bot-content-left-text">
            Inscrivez-vous à vos activités favorites depuis votre domicile,
            gérez vos contrats à distance, suivez l’actualité de votre association
            et les activités qu’elle propose.
          </p>
          <p className="wrapper-bot-content-left-text">
            Renseignez-vous et inscrivez-vous aux évènements qui vous intéressent en un clic.
          </p>
        </div>
        <div className="wrapper-bot-right">
          <img src={dashboardUser} alt="" className="wrapper-bot-right-img" />
        </div>
      </div>
    </div>
    <div className="home-footer">
      <Footer />
    </div>
  </div>
);

// == Export
export default Home2;
