import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant
const Error404 = () => (
  <div className="error">
    <h1 className="error-title">404</h1>
    <p className="error-text"> <em>Oups!</em> <br /> Cette page n'existe pas</p>
  </div>
);

// == Export
export default Error404;
