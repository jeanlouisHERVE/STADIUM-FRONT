import './styles.scss'

// == Composant
const Listing = ({adherents}) => (
  <div className="listing-container">
    <h1>Tableau de bord</h1>
    <div className="listing-header">
      <div className="listing-header-leftside">
        <div className="listing-title"><h2>Title</h2></div>
        <div className="listing-addIcon"><span className=" material-icons">add</span></div>
      </div>
      <div className="listing-header-rightside">
        <div className="listing-filter">
          <button className="listing-filter-button">A - Z </button>
          <button className="listing-filter-button">Z - A</button>
        </div>
      </div>
    </div>
    {
      adherents.map((item, index) => (
        <>
          <div className="listing-line-container">
                  <div className="listing-line-leftside" key={item.id}>
                        <div className="listing-line-items">{index}</div>
                        <div className="listing-line-items">{item.firstName}</div>
                        <div className="listing-line-items">{item.lastName}</div>
                        <div className="listing-line-items"> </div>
                        <div className="listing-line-items"> </div>
                  </div>
                  <div className="listing-line-rightside">
                      <span className="listing-line-icon material-icons">email</span>
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

// == Export
export default Listing;


