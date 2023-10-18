import React, { useState } from "react";
import "../appointment/Appointment.css";
import { FaAngleRight, FaArrowLeft, FaTimes } from "react-icons/fa";

const Appointment = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="appointment-container">
        <h1>Find Appointments By:</h1>
        <div className="appointment-list" onClick={toggleMenu}>
          <p>Specialty </p> <FaAngleRight />
        </div>
        {isMenuOpen && (
          <div className={`appointment-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="sidebar-header">
              <div className="logo">
                <span>SESAME</span>
              </div>
              <div className="close-icon" onClick={toggleMenu}>
                {/* <FaTimes size={18} /> */}
              </div>
            </div>
            <div className="app-list-container">
              <div className="app-list-hearder" onClick={toggleMenu}>
                <FaArrowLeft />
                <p>Specialty</p>
              </div>
              <div className="app-list">
                <li>Covid 19</li>
                <li>Dermatologist</li>
                <li>Infections</li>
                <li>Mental Health</li>
                <li>Covid 19</li>
                <li>Covid 19</li>
                <li>Covid 19</li>
                <li>Covid 19</li>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Appointment;
