import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../utils/axios';
import './styles.scss';

// == Composant
const ListingActivities = ({
  activities,
  reloadData,
  sort,
  asort,
}) => {
  const path = useLocation();

  const deleteActivity = (id) => {
    api.delete(
      // URL
      `/api/v1/backoffice/superadmin/activities/${id}`,
      // 'https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/events',
      // paramètres
    )
      .then((response) => {
        console.log(response);
        reloadData();
        // on veut traiter la réponse en modifiant le state => dispatch une action
        // qui sera traitée par le reducer
        // const actionSuccess = successLogin(response.data.pseudo);
        // store.dispatch(actionSuccess);
      })
      .catch((error) => {
        console.warn(error);
        // TODO mettre en place une nouvelle action (par exemple ERROR_LOGIN),
        // qui serait traitée par le reducer
        // On aurait une case dans le state pour piloter l'affichage d'un
        // message d'erreur sur l'application
      });
  };

  return (
    <div className="listingActivity-container">
      <div className="listingActivity-header">
        <div className="listingActivity-header-leftside">
          <div className="listingActivity-title"><h2>Activités</h2></div>
          <Link to={`${path.pathname}/addActivity`} className="listingActivity-addIcon"><span className=" material-icons">add</span></Link>
        </div>
        <div className="listingActivity-header-rightside">
          <div className="listingActivity-filter">
            <button className="listingActivity-filter-button" type="button" onClick={sort}>A - Z</button>
            <button className="listingActivity-filter-button" type="submit" onClick={asort}>Z - A</button>
          </div>
        </div>
      </div>
      <div className="listingActivity-line-header">
        <div className="listingActivity-line-header-leftside">
          <div className="listingActivity-line-header-items">Sport</div>
        </div>
        <div className="listingActivity-line-header-rightside" />
      </div>
      { activities
      && activities.map((activity) => (
        <div className="listingActivity-line-container" key={activity.id}>
          <div className="listingActivity-line-leftside">
            <div className="listingActivity-line-items">{activity.name}</div>
          </div>
          <div className="listingActivity-line-rightside">
            <Link to={`${path.pathname}/activity/${activity.id}`} className="card-link"><span className="listingActivity-line-icon-view material-icons">visibility</span></Link>
            {/* <Link to={`${path.pathname}/activity/${activity.id}`} className="card-link"><span className="listingActivity-line-icon-view material-icons">mode_edit</span></Link> */}
            <span className="listingActivity-line-icon-view  material-icons" onClick={() => deleteActivity(activity.id)}>delete</span>
          </div>
        </div>
      ))}
    </div>
  );
};

ListingActivities.propTypes = {
  activities: PropTypes.array.isRequired,
  sort: PropTypes.func.isRequired,
  asort: PropTypes.func.isRequired,
  reloadData: PropTypes.func.isRequired,
};

// == Export
export default ListingActivities;
