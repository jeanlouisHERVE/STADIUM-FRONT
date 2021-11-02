import PropTypes from 'prop-types';

import CardAssociation from '../CardAssociation';
import './styles.scss';

const Cards = ({ associations }) => (
  <div className="cards">
    {associations.map((association) => (
      <CardAssociation key={association.id} association={association} />
    ))}
  </div>
);

Cards.propTypes = {
  associations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Cards.defaultProps = {
  associations: null,
};

export default Cards;
