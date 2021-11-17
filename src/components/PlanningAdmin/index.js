import './styles.scss';
import planning from './planning2.jpg';

// == Composant
const PlanningAdmin = () => (
  <div className="dashboard-admin-planning">
    <h1>Planning</h1>
    <img className="dashboard-admin-planning-picture" src={planning} alt="" />
  </div>
);

// == Export
export default PlanningAdmin;
