import './styles.scss'

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
        <div className="listing-filter">
          <div class="filters__task filters__task--completion buttons are-small has-addons">
            <button class="filters__choice button">A - Z </button>
            <button class="filters__choice button">Z - A</button>
          </div>
        </div>
      </div>
    </div>
    <div className="listing-corpse">
          <div className="listing-line-leftside">
                <div className="listing-line-items">Guy</div>
                <div className="listing-line-items">MAUVE</div>
                <div className="listing-line-items"> </div>
                <div className="listing-line-items"> </div>
          </div>
          <div className="listing-line-rightside">
              <span class="listing-line-icon material-icons">email</span>
              <span class="listing-line-icon material-icons">border_color</span>
              <span class="listing-line-icon material-icons">visibility</span>
              <span class="listing-line-icon material-icons">delete</span>
          </div>
    </div>
  </div>
);

// == Export
export default Listing;


