import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant
const CardAssociation = ({ association }) => (
  <div className="card-association">
    <img src={association.image} alt="" className="image" />
    <h2>{association.name}</h2>
    <div className="details-association">
      <Link to={`/superadmin/backoffice/association/${association.id}`} className="card-link">Voir le détail</Link>
    </div>
  </div>
);

CardAssociation.propTypes = {
  association: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

// == Export
export default CardAssociation;
