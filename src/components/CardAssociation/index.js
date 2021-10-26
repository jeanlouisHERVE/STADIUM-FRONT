import './styles.scss';

// import imgAsso1 from 'src/assets/imgAsso1.png';

// == Composant
const CardAssociation = () => (
  <div className="card-association">
    {/* <img src={imgAsso1} alt="Img Association"
          className="card-association-img" style={{ width: '200px' }} /> */}
    <div className="image" />
    <h2>Association</h2>
    <div className="details-association">
      <p>
        View Details
      </p>
    </div>
  </div>
);

// == Export
export default CardAssociation;
