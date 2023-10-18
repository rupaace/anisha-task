import React, { useState } from "react";
import "./Sidebar.css";
import Appointment from "../appointment/Appointment";

const Sidebar = () => {
  return (
    <>
      <div className="siderbar-container">
        <Appointment />
      </div>
    </>
  );
};

export default Sidebar;
