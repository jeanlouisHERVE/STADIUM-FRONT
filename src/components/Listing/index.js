import './styles.scss'

// == Composant
const Listing = ({adherents}) => (
  <div className="listing-container">
    <div className="listing-header">
      <div className="listing-header-leftside">
        <div className="listing-title"><h2>Title</h2></div>
        <div className="listing-addIcon"><span className=" material-icons">add</span></div>
      </div>
      <div className="listing-header-rightside">
        <div className="listing-filter">
          <button class="listing-filter-button">A - Z </button>
          <button class="listing-filter-button">Z - A</button>
        </div>
      </div>
    </div>
    <div className="listing-line-container">
        {
          adherents.map((item, index) => (
            <>
            <div className="listing-line-leftside" key={item.id}>
                  <div className="listing-line-items">{index}</div>
                  <div className="listing-line-items">{item.firstname}</div>
                  <div className="listing-line-items">{item.lastname}</div>
                  <div className="listing-line-items"> </div>
                  <div className="listing-line-items"> </div>
            </div>
            <div className="listing-line-rightside">
                <span class="listing-line-icon material-icons">email</span>
                <span class="listing-line-icon material-icons">border_color</span>
                <span class="listing-line-icon material-icons">visibility</span>
                <span class="listing-line-icon material-icons">delete</span>
            </div>
            </>
          ))
          }
    </div>
  </div>
);

// == Export
export default Listing;


