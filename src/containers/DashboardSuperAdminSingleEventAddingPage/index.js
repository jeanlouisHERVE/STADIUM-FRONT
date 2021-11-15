import { connect } from 'react-redux';

// on importe le composant de présentation
import SuperAdminAddEvent from '../../pages/DashboardSuperAdminSingleEventAdding';

import { updateEventField, submitEvent } from '../../actions/event';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state, ownProps) => ({
  name: state.event.name,
  startDate: state.event.startDate,
  schedule: state.event.schedule,
  endDate: state.event.endDate,
  place: state.event.place,
  maxParticipant: Number(state.event.maxParticipant),
  association: Number(ownProps.match.params.id),
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateField: (value, name) => {
    const action = updateEventField(value, name);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(submitEvent());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SuperAdminAddEvent);
