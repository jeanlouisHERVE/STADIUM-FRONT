import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import findImgByKey from '../../utils/img';

// == Composant
const CardAssociation = ({ association }) => (
  <div className="card-association">
    <img src={findImgByKey(association.image)} alt="" className="logo-association" />
    <h2>{association.name}</h2>
    <Link to={`/backoffice/superadmin/associations/${association.id}`} className="details-association">Voir le détail</Link>
  </div>
);

CardAssociation.propTypes = {
  association: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

// == Export
export default CardAssociation;
