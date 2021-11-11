import { connect } from 'react-redux';

// on importe le composant de présentation
import SuperAdminAddLesson from '../../pages/DashboardSuperAdminSingleLessonAdding';

import { updateLessonField, submitLesson } from '../../actions/lesson';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state, ownProps) => ({
  level: state.event.level,
  startTime: state.event.startTime,
  endTime: state.event.endTime,
  day: state.event.day,
  place: state.event.place,
  activity: state.event.activity,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateField: (value, name) => {
    const action = updateLessonField(value, name);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(submitLesson());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SuperAdminAddLesson);
