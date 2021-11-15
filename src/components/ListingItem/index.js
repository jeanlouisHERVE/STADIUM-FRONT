import moment from 'moment';
import { Link } from 'react-router-dom';

const ListingItem = ({ itemInfos, onDelete }) => {
  const coucou = '';

  return (
    <>
      <div className="listingEvent-line-container">
        <div className="listingEvent-line-leftside">
          {itemInfos.map((info, key) => (
            <div className={`listingEvent-line-items-${key}`}>{info}</div>
          ))}
        </div>
        <div className="listingEvent-line-rightside">
          <Link to={`${path.pathname}/event/${item.id}`} className="card-link"><span className="listingEvent-line-icon-view material-icons">visibility</span></Link>
          <span className="listingEvent-line-icon-delete material-icons" onClick={onDelete}>delete</span>
        </div>
      </div>
    </>
  );
};

ListingItem.propTypes = {
  itemInfos: PropTypes.array.isRequired,
};

// == Export
export default ListingItem;
