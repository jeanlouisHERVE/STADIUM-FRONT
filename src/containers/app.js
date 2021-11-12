import { connect } from 'react-redux';

// on importe le composant de présentation
import App from '../components/App';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  userAuthentified: state.login.userAuthentified,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = () => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
