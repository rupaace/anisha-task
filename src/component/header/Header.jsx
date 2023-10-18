import React, { useState } from "react";
import "../header/Header.css";
import { Twirl } from "hamburger-react";
import { Link } from "react-router-dom";
import { FaBars, FaMapMarkerAlt, FaSearch, FaTimes, FaUser } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchFieldFocused, setSearchFieldFocused] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <header className="header-wrapper">
        <nav className="navbar">
          <div className="navbar-logo">
            <div
              className={`navbar-toggle ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              {/* <Twirl size={18} className="twirl" /> */}
              <FaBars size={18}  />
            </div>
            <div className="navbar-brand">
              <span>SESAME</span>
            </div>
          </div>{" "}
          <div className="navbar-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/services">One-time visit</Link>
              </li>
              <li className="nav-item">
                <Link to="/join">Sesame Plus</Link>
              </li>
            </ul>
            <button className="navbar-btn">NEW</button>
          </div>
          <div className={`offcanvas-menu ${menuOpen ? "open" : ""}`}>
            {/* sidebar-header */}
            <div className="sidebar-header">
              <div className="logo">
                <span>SESAME</span>
              </div>
              <div className="close-icon" onClick={toggleMenu}>
                <FaTimes size={18} />
              </div>
            </div>
            <Sidebar />
          </div>
          <div className="navbar-location">
            <div
              className={`input-group ${isSearchFieldFocused ? "focused" : ""}`}
            >
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-field "
                placeholder="Symptom, services, doctor name"
                onFocus={() => setSearchFieldFocused(true)}
                onBlur={() => setSearchFieldFocused(false)}
              />
              <FaMapMarkerAlt className="map-icon" />
              <select
                name="Search Location"
                id=""
                className="location-field"
                onFocus={() => setSearchFieldFocused(true)}
              >
                <option value="1">Search Location</option>
                <option value="1">Chitwan</option>
                <option value="1">Chitwan</option>
                <option value="1">Chitwan</option>
              </select>
            </div>
          </div>
          <div className="navbar-login">
            <FaUser className="user-icon" />
            <span className="nav-user ">LOG IN</span>
          </div>
        </nav>
      </header>
      <div className="main"></div>
    </>
  );
}

export default Header;
