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
      <table className="listing-table">
        <tr className="listing-table-header">
          <th className="listing-table-header-item">Prénom</th>
          <th className="listing-table-header-item">Nom</th>
          <th className="listing-table-header-item">Icones</th>
        </tr>
        <tr className="listing-table-ligne-container">
          <div className="listing-table-ligne-leftside">
            <td>Frédéric</td>
            <td>Barsoti</td>
          </div>
          <td className="listing-table-ligne-rightside">
            <span class="material-icons">email</span>
            <span class="material-icons">border_color</span>
            <span class="material-icons">visibility</span>
            <span class="material-icons">delete</span>
          </td>
        </tr> 
        <tr><td>Mathilde</td><td>Dupont</td></tr> 
        <tr><td>Omar</td><td>Malalid</td></tr> 
        <tr><td>Camille</td><td>Lemaire</td></tr>
      </table>
    </div>
  </div>
);

// == Export
export default Listing;


