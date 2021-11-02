import { connect } from 'react-redux';
import { fetchAssociations } from '../../actions/superadmin';
import DashboardSuperAdmin from '../../pages/DashboardSuperAdmin';

const mapStateToProps = (state) => ({
  associations: state.associations.list,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadAssociations: () => {
    dispatch(fetchAssociations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSuperAdmin);
