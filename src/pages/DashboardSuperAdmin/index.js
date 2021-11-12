// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import AsideNavbar from '../../components/AsideNavbar';
// import Navbar from '../../components/Navbar';
// import Sidebar from '../../components/Sidebar';
// import CardAssociation from '../../components/CardAssociation';

// import './styles.scss';

//* async function for data request
// const DashboardSuperAdmin = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [data, setData] = useState([]);

//   const path = useLocation();
//   console.log(path.pathname);

//   const toggle = () => {
//    setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     async function loadData() {
//       const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1${path.pathname}`);
//       const rawResponse = await fetch(`http://pablo-cany.vpnuser.lan:8000/api/v1${path.pathname}`);
//       const response = await rawResponse.json();
//       setData(response);
//       console.log(data);
//     }
//     loadData();
//   }, []);

//   return (
//     <>
//       <Sidebar isOpen={isOpen} toggle={toggle} />
//       <Navbar toggle={toggle} />
//       <div className="dashboard-superadmin">
//         <AsideNavbar />
//         <div className="cards">
//           {data.map((association) => (
//             <CardAssociation key={association.id} association={association} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardSuperAdmin;

//* -------------------------------------------------------------------------
//* async function for data request
//* -------------------------------------------------------------------------

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import CardAssociation from '../../components/CardAssociation';

import './styles.scss';

const DashboardSuperAdmin = ({ loadAssociations, loading, associations }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    loadAssociations();
  }, []);

  if (loading) {
    return (
      <div>
        <p>No Data Yet</p>
      </div>
    );
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin">
        <AsideNavbar />
        <div className="cards">
          {associations && associations.map((association) => (
            <CardAssociation key={association.id} association={association} />
          ))}
        </div>
      </div>
    </>
  );
};

DashboardSuperAdmin.propTypes = {
  loading: PropTypes.bool,
  loadAssociations: PropTypes.func.isRequired,
  associations: PropTypes.array.isRequired,
};

DashboardSuperAdmin.defaultProps = {
  loading: true,
};

export default DashboardSuperAdmin;
