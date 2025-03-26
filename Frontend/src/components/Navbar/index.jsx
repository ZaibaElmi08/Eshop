import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in when the Navbar loads
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);
  

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update state
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Ecommerce</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex align-items-center">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-light me-3" type="submit">Search</button>

            {isLoggedIn ? (
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-success">
                <FaUser size={20} /> 
              </Link>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
