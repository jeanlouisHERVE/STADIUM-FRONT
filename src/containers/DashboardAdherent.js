import { connect } from 'react-redux';

// on importe le composant de présentation
import DashboardAdherent from '../pages/DashboardAdherent';

import { updateDocumentAdherent, submitDocumentAdherent } from '../actions/adherent';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  picture: state.adherent.picture,
  medicalCertificate: state.adherent.medicalCertificate,
  rulesOfProcedure: state.adherent.rulesOfProcedure,
  accountId: Number(state.adherent.accountId),
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateField: (rulesOfProcedure, medicalCertificate, picture) => {
    const action = updateDocumentAdherent(rulesOfProcedure, medicalCertificate, picture);
    dispatch(action);
  },
  handleSubmit: () => {
    console.log('appel handle submit');
    dispatch(submitDocumentAdherent());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SuperAdminAddAdherent);
