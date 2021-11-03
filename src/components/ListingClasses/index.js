import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const ListingClasses = ({ classes }) => (
  <div className="listing-container">
    <div className="listing-header">
      <div className="listing-header-leftside">
        <div className="listing-title"><h2>Evénements</h2></div>
        <div className="listing-addIcon"><span className=" material-icons">add</span></div>
      </div>
      <div className="listing-header-rightside">
        <div className="listing-filter">
          <button className="listing-filter-button" type="submit">A - Z </button>
          <button className="listing-filter-button" type="submit">Z - A</button>
        </div>
      </div>
    </div>
    <div className="listing-line-header">
      <div className="listing-line-header-leftside">
        <div className="listing-line-header-items-level">Niveau</div>
        <div className="listing-line-header-items-day">Jour</div>
        <div className="listing-line-header-items-startTime">H-début</div>
        <div className="listing-line-header-items-endTime">H-fin</div>
      </div>
      <div className="listing-line-header-rightside" />
    </div>
    {
      classes.map((item, index) => (
        <>
          <div className="listing-line-container" key={item.id}>
            <div className="listing-line-leftside">
              <div className="listing-line-items-level"><div className="listing-line-items-level-cartouche">{item.level}</div></div>
              <div className="listing-line-items-day">{item.day}</div>
              <div className="listing-line-items-startTime">{item.startTime}</div>
              <div className="listing-line-items-endTime">{item.endTime}</div>
            </div>
            <div className="listing-line-rightside">
              <span className="listing-line-icon material-icons">border_color</span>
              <span className="listing-line-icon material-icons">visibility</span>
              <span className="listing-line-icon material-icons">delete</span>
            </div>
          </div>
        </>
      ))
    }
  </div>
);

ListingClasses.propTypes = {
  classes: PropTypes.array.isRequired,
};

// == Export
export default ListingClasses;
