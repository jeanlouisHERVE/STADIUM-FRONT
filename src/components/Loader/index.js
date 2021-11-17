import CircularProgress from 'react-cssfx-loading/lib/CircularProgress';
import './styles.scss';

const Loader = () => (
  <div className="loader">
    <CircularProgress color="#02A5A5" width="300px" height="300px" duration="3.5s" />
  </div>
);

export default Loader;
