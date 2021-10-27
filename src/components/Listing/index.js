import './styles.scss';

// == Composant
const Listing = () => (
  <div className="listing-container">
    <div className="listing-header">
      <div className="listing-header-leftside">
        <div className="listing-title"><h2>Title</h2></div>
        <div className="listing-addIcon"><span className=" material-icons">add</span></div>
      </div>
      <div className="listing-header-rightside">
        <div className="listing-filter"><h2>Filtrer</h2></div>
        <div className="listing-filterIcon"><span className=" material-icons">add</span></div>
      </div>
    </div>
    <div className="listing-corpse">


    </div>
  </div>
);

// == Export
export default Listing;


