import PropTypes from 'prop-types';
import './styles.scss';

// import imgAsso1 from 'src/assets/imgAsso1.png';

// == Composant
const CardAssociation = ({ association }) => (
  <div className="card-association">
    {/* <img src={imgAsso1} alt="Img Association"
          className="card-association-img" style={{ width: '200px' }} /> */}
    <div className="image" />
    <h2>{association.name}</h2>
    <div className="details-association">
      <p>
        View Details
      </p>
    </div>
  </div>
);

CardAssociation.propTypes = {
  association: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default CardAssociation;
