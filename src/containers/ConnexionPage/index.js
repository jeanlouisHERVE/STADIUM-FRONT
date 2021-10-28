import { connect } from 'react-redux';

// on importe le composant de présentation
import ConnexionPage from '../../pages/ConnexionPage';

import { submitLogin, updateSettingsField } from '../../actions/connexion';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.email,
  password: state.password,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateField: (value, identifier) => {
    const action = updateSettingsField(value, identifier);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(submitLogin());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ConnexionPage);
