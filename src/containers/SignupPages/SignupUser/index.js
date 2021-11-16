import { connect } from 'react-redux';

// on importe le composant de présentation
import SignupUser from '../../../pages/SignupPages/SignupUser';

import { submitUserSubscription, updateSubscriptionField } from '../../../actions/signup';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  username: state.signupUser.username,
  password: state.signupUser.password,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateField: (value, identifier) => {
    const action = updateSubscriptionField(value, identifier);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(submitUserSubscription());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SignupUser);
