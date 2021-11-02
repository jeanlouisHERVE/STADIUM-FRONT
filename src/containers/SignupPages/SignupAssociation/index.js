import { connect } from 'react-redux';

// on importe le composant de présentation
import SignupAssociation from '../../../pages/SignupPages/SignupAssociation';

import { submitSubscription, updateSubscriptionField } from '../../../actions/signup';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  associationName: state.signupAssociation.associationName,
  presidentName: state.signupAssociation.presidentName,
  presidentFirstName: state.signupAssociation.presidentFirstName,
  associationAddress: state.signupAssociation.associationAddress,
  associationZipCode: state.signupAssociation.associationZipCode,
  associationTown: state.signupAssociation.associationTown,
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
    dispatch(submitSubscription());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SignupAssociation);
