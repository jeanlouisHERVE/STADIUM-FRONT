import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import CardAssociation from '../../components/CardAssociation';

import './styles.scss';
// import associationDatas from './data/associations';

// == Composant
const DashboardSuperAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const path = useLocation();
  // console.log(path.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function loadData() {
      const rawResponse = await fetch(`https://sym-stadium.herokuapp.com/api/v1${path.pathname}`);
      const response = await rawResponse.json();
      setData(response);
    }
    loadData();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-superadmin">
        <AsideNavbar />
        <div className="cards">
          {data.map((association) => (
            <CardAssociation key={association.id} association={association} />
          ))}
        </div>
      </div>
    </>
  );
};

// == Export
export default DashboardSuperAdmin;
