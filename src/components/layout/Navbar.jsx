import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: 10, background: "#eee" }}>
    <NavLink to="/">Home</NavLink> |{" "}
    <NavLink to="/dashboard">Dashboard</NavLink> |{" "}
    <NavLink to="/certifications">Certifications</NavLink> |{" "}
    <NavLink to="/certifications/add">Add Certification</NavLink> |{" "}
    <NavLink to="/renewals">Renewals</NavLink>
  </nav>
);

export default Navbar;
