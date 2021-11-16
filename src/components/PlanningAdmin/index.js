import './styles.scss';
import planning from './planning.jpg';

// == Composant
const PlanningAdmin = () => (
  <div className="dashboard-admin-planning">
    <img className="dashboard-admin-planning-picture" src={planning} alt="" />
  </div>
);

// == Export
export default PlanningAdmin;
