import { connect } from 'react-redux';

// on importe le composant de présentation
import SettingsSuperAdmin from '../../../components/SettingsSuperAdmin';

import { submitUpdateLogin, updateLoginField } from '../../../actions/settings';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.settingsSuperAdmin.email,
  password: state.settingsSuperAdmin.password,
  testField1: state.settingsSuperAdmin.testField1,
  testField2: state.settingsSuperAdmin.testField2,
  buttonMessageSaved: state.settingsSuperAdmin.buttonMessageSaved,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateField: (value, identifier) => {
    const action = updateLoginField(value, identifier);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(submitUpdateLogin());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SettingsSuperAdmin);
