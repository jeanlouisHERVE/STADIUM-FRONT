import { useState, useEffect } from 'react';
import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import CardAssociation from '../../components/CardAssociation';

import './styles.scss';
import associationDatas from './data/associations';

// == Composant
const DashboardSuperAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function loadData() {
      const rawResponse = await fetch('https://sym-stadium.herokuapp.com/api/v1/backoffice/superadmin/associations/');
      const response = await rawResponse.json();
      console.log(response);
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
          {associationDatas.map((association) => (
            <CardAssociation key={association.id} association={association} />
          ))}
        </div>
      </div>
    </>
  );
};

// == Export
export default DashboardSuperAdmin;
