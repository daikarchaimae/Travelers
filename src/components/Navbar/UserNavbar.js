import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function UserNavbar({ setIsAuthenticated }) {

    const navigate=useNavigate();
    const handleLogout = () => {
      setIsAuthenticated(false); 
      navigate('/home');
    };
  
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/reservation/new">New Reservation</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/profileList">ProfileList</Link></li>
          <li><Link to="/feedback/new">Feedback</Link></li>
          <li><Link to="/feedbacks">Feedbacks</Link></li>
          <li><Link to="/data">Data</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li> 
        </ul>
      </nav>
    );
  }
export default UserNavbar;  