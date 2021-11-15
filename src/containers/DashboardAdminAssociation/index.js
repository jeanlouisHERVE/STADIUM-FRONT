import { connect } from 'react-redux';

// on importe le composant de présentation
import DashboardAdminAssociation from '../../pages/DashboardAdminAssociation';
import { getAssociationInformations } from '../../actions/adminAssociation';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  loading: state.associations.loading,
  associations: state.associations.list,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadAssociation: () => {
    dispatch(getAssociationInformations());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(DashboardAdminAssociation);
