import { connect } from 'react-redux';

// on importe le composant de présentation
import SuperAdminAddLesson from '../../pages/DashboardSuperAdminSingleLessonAdding';

import { updateLessonField, submitLesson } from '../../actions/lesson';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state, ownProps) => ({
  level: state.lesson.level,
  startTime: state.lesson.startTime,
  endTime: state.lesson.endTime,
  day: state.lesson.day,
  place: state.lesson.place,
  activity: state.lesson.activity,
  association: ownProps.match.params.id,
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
