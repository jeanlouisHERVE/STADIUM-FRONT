import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsideNavbar from '../../components/AsideNavbar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import CardAssociation from '../../components/CardAssociation';
import Loader from '../../components/Loader';

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
      <Loader />
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
