import { connect } from 'react-redux';

// on importe le composant de présentation
import SignupAssociation from '../../../pages/SignupPages/SignupAssociation';

import { submitAssociationSubscription, updateSubscriptionField } from '../../../actions/signup';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  // associationName: state.signupAssociation.associationName,
  // presidentName: state.signupAssociation.presidentName,
  // presidentFirstName: state.signupAssociation.presidentFirstName,
  // associationAddress: state.signupAssociation.associationAddress,
  // associationZipCode: state.signupAssociation.associationZipCode,
  // associationTown: state.signupAssociation.associationTown,

  name: state.signupAssociation.name,
  presidentLastName: state.signupAssociation.presidentLastName,
  presidentFirstName: state.signupAssociation.presidentFirstName,
  address: state.signupAssociation.address,
  phoneNumber: state.signupAssociation.phoneNumber,
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
    dispatch(submitAssociationSubscription());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SignupAssociation);
