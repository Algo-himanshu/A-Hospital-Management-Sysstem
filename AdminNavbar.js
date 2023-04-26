import React from 'react'
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function AdminNavbar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">HMS</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/dashboard"><a className="nav-link" >Dashboard </a> </Link>
          {/* */}
        </li>
        <li className="nav-item active">
          <Link to="/manageDoctors"><a className="nav-link" >Manage Doctors </a> </Link>
          {/* */}
        </li>
        <li className="nav-item">
          <Link to="/adminDoctorReg"><a className="nav-link" >Doctor Registration</a></Link>

        </li>
        <li className="nav-item">
          <Link to="/adminAppointment"><a className="nav-link">Appointments</a></Link>

        </li>
        <li className="nav-item">
          <LogoutButton/>
        </li>
      </ul>
    </div>
  </nav>
</div>
  )
}

export default AdminNavbar;