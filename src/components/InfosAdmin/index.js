import './styles.scss';
import data from '../../utils/staticDatas/statsAdminDashboard';

// == Composant
const infosAdmin = () => (
  <div className="dashboard-admin-informations">
    <div className="dashboard-admin-informations-container">
      <h1>Indicateurs</h1>
      <div className="dashboard-admin-informations-content">
        {data.map((item) => (
          <div key={item.id} className="dashboard-admin-informations-items">
            <span className="material-icons dashboard-admin-informations-icon">{item.icon}</span>
            <p className="dashboard-admin-informations-name">{item.name} :</p>
            <p className="dashboard-admin-informations-value"> &nbsp; { item.value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// == Export
export default infosAdmin;
