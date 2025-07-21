import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li
          className="navbar-item dropdown-toggle"
          onClick={() => setAboutOpen(!aboutOpen)}
        >
          About
          <ul className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
            <li>Skills</li>
            <li>History</li>
          </ul>
        </li>
        <li className="navbar-item">Projects</li>
        <li className="navbar-item">Contact</li>
      </ul>
    </nav>
  );
}
