import { connect } from 'react-redux';

// on importe le composant de présentation
import SuperAdminAddActivity from '../../pages/dashboardSuperAdminSingleActivityAdding';

import { updateActivityField, submitActivity } from '../../actions/activity';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state, ownProps) => ({
  name: state.activity.name,
  picture: state.activity.picture,
  association: Number(ownProps.match.params.id),
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateField: (value, name) => {
    const action = updateActivityField(value, name);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(submitActivity());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SuperAdminAddActivity);
