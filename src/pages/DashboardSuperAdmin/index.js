import { useState } from 'react';
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import CardAssociation from '../../components/CardAssociation';

import './styles.scss';
// import associationDatas from './data/associations';

// == Composant
const DashboardSuperAdmin = ({ associations }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [data, setData] = useState([]);

  // const path = useLocation();
  // console.log(path.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   async function loadData() {
  //     const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1${path.pathname}`);
  //     const rawResponse = await fetch(`http://pablo-cany.vpnuser.lan:8000/api/v1${path.pathname}`);
  //     const response = await rawResponse.json();
  //     setData(response);
  //     console.log(data);
  //   }
  //   loadData();
  // }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin">
        <AsideNavbar />
        <div className="cards">
          {associations.map((association) => (
            <CardAssociation key={association.id} association={association} />
          ))}
        </div>
      </div>
    </>
  );
};

DashboardSuperAdmin.propTypes = {
  associations: PropTypes.array.isRequired,
};

// == Export
export default DashboardSuperAdmin;
