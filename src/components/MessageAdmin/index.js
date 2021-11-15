import './styles.scss';
import Avatar from './avataaars.svg';

// == Composant
const MessageAdmin = () => (
  <div className="dashboard-admin-Message">
    <h1>Messagerie</h1>
    <span className="material-icons">mark_email_unread</span>
    <div className="dashboard-admin-Message-container">
      <img className="dashboard-admin-Message-UserPicture" src={Avatar} alt="" />
      <div className="dashboard-admin-Message-content">
        <div className="dashboard-admin-Message-title">
          <p>Lorem Ipsum</p>
          <div className="dashboard-admin-Message-indicator" />
        </div>
        <div className="dashboard-admin-Message-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
        </div>
      </div>
    </div>
    <div className="dashboard-admin-Message-container">
      <img className="dashboard-admin-Message-UserPicture" src={Avatar} alt="" />
      <div className="dashboard-admin-Message-content">
        <div className="dashboard-admin-Message-title">
          <p>Lorem Ipsum</p>
          <div className="dashboard-admin-Message-indicator" />
        </div>
        <div className="dashboard-admin-Message-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
        </div>
      </div>
    </div>
    <div className="dashboard-admin-Message-container">
      <img className="dashboard-admin-Message-UserPicture" src={Avatar} alt="" />
      <div className="dashboard-admin-Message-content">
        <div className="dashboard-admin-Message-title">
          <p>Lorem Ipsum</p>
          <div className="dashboard-admin-Message-indicator" />
        </div>
        <div className="dashboard-admin-Message-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default MessageAdmin;
