import React from 'react';
import { Outlet  } from 'react-router-dom';
import Sidebar from '../../components/a_Sidebar';


// ================================================================================================================

const AdminPage = () => {

  return (
    <div className="app-container">
      <Sidebar />

      <div className="content">
        <Outlet />

      </div>
    </div>
  );
};

export default AdminPage;

