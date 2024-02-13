import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Admin.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="button-container">
        <Link to="/DogOwnerAdminDB" className="dashboard-button">Dog Owners</Link>
        <Link to="/VehicleOwnerAdminDB" className="dashboard-button">Vehicle Owners</Link>
        <Link to="/DogHandlerAdminDB" className="dashboard-button">Dog Handlers</Link>
        <Link to="/VeterinarianAdminDB" className="dashboard-button">Veterinarians</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
