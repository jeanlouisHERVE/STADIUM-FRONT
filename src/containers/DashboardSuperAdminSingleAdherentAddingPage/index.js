import { connect } from 'react-redux';

// on importe le composant de présentation
import SuperAdminAddAdherent from '../../pages/DashboardSuperAdminSingleAdherentAdding';

import { updateAdherentField, submitAdherent } from '../../actions/adherent';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state, ownProps) => ({
  firstname: state.adherent.firstname,
  lastname: state.adherent.lastname,
  picture: state.adherent.picture,
  accountId: Number(state.adherent.accountId),
  association: Number(ownProps.match.params.id),
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateField: (value, name) => {
    const action = updateAdherentField(value, name);
    dispatch(action);
  },
  handleSubmit: () => {
    console.log('appel handle submit');
    dispatch(submitAdherent());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SuperAdminAddAdherent);
