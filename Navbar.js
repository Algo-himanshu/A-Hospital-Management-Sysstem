import React from 'react'
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function Navbar() {
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
          <Link to="/home"><a className="nav-link" >Home </a> </Link>
          {/* */}
        </li>
        <li className="nav-item">
          <Link to="/about"><a className="nav-link" >About</a></Link>

        </li>
        <li className="nav-item">
          <Link to="/createAppointment"><a className="nav-link">Create Appointment</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/userAppointment/:id"><a className="nav-link">My Appointment</a></Link>
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

export default Navbar;