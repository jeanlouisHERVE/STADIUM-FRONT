import { connect } from 'react-redux';

// on importe le composant de présentation
import LoginPage from '../../pages/LoginPage';

import { submitLogin, updateLoginField } from '../../actions/login';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  username: state.login.username,
  password: state.login.password,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateField: (value, identifier) => {
    const action = updateLoginField(value, identifier);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(submitLogin());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
