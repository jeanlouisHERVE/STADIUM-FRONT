import './styles.scss';
import ButtonFormLogin from '../../components/ButtonFormLogin';
<<<<<<< HEAD
import ButtonFormSubscribe from '../../components/ButtonFormSubscribe';
import Footer from '../../components/Footer';
// == Composant
const Home = () => (
  <div className="home">
      <div className= "home-header">
          <div className="part-registration">
            <h1 className="part-registration-title"> Stadium est la solution simple, pratique et gratuite au service de la vie associative. </h1>
              <p className="part-registration-text">
              Rejoignez un réseau d’associations sportives, présentes partout en France. 
              Inscrivez-vous pour bénéficiez d’un service de qualité et optimisé pour vous faciliter le quotidien.
              </p>
          <ButtonFormSubscribe />  
          </div>

          <div className="part-connexion">
          <ButtonFormLogin />
              <div className="part-connexion-img">
                <img src="" className="stadium-img" alt=""/>
              </div>
          </div>
      </div>

      <div className= "part-association"> 
          <div className="part-association-title"> 
              <h1 className="part-association-title-title"> Vous êtes une association? Stadium est la solution simple, pratique et gratuite au service de la vie associative. </h1>
          </div>
            <div className="part-association-content"> 
                <p className="part-association-text">Stadium vous permet de dématérialiser entièrement la gestion de vos contrats d’adhérents.</p>
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
            </div>

          <div className="part-association-img">
            <img src="" className="dashboard-association-img" />
          </div>
      </div>

      <div className="part-user">
          <div className="part-user-title"> 
          <h1 className="part-user-title-title"> Vous êtes un adhérent? Stadium est la solution simple, pratique et gratuite pour suivre votre association et vos activités </h1>
          </div>
          <div className="part-user-content">
            <p className="part-user-text"> Inscrivez-vous sur Stadium et : </p>
              <ul>
                <li className="part-user-text-elem-list"> Retrouvez facilement les associations sportives autour de chez vous,</li>
                <li className="part-user-text-elem-list">Inscrivez-vous à vos activités favorites depuis votre domicile, </li>
                <li className="part-user-text-elem-list"> Gérer vos contrats à distance,</li>
                <li className="part-user-text-elem-list"> Renseignez-vous et inscrivez-vous aux évènements qui vous intéressent en un clic.</li>
              </ul>
    
          </div>

          <div className="part-user-img">
            <img src="" className="dashboard-association-img" />
          </div>
      </div>

      <div className="footer">
        <Footer /> 
      </div>
=======

// == Composant
const Home = () => (
  <div className="home">
    <div className="part-inscription">
      <h1 className="part-inscription-title"> Stadium est la solution simple, pratique et gratuite au service de la vie associative. </h1>
      <p className=""> Rejoignez un réseau d’associations sportives, présentes partout en France.
        Inscrivez-vous pour bénéficiez d’un service de qualité et optimisé
        pour vous faciliter le quotidien.
      </p>
    </div>
    <div className="part-connexion">
      <ButtonFormLogin />
      <HomePicture />
    </div>

    <div>
      <div className=""> </div>
      <div>
       <DashboardPicture />
      </div>
      <div>
        <p> </p>
      </div>
    </div>
>>>>>>> fd2ed07c51859483af53130af89cbcc8a6779fa6
  </div>

  
);

// == Export
export default Home;
