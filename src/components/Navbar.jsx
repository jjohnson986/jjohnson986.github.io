import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button type="button" className="navbar-btn">
            Home
          </button>
        </li>
        <li
          className="navbar-item dropdown-toggle"
          style={{ position: "relative" }}
        >
          <button
            type="button"
            className="navbar-btn"
            onClick={() => setAboutOpen(!aboutOpen)}
            aria-haspopup="true"
            aria-expanded={aboutOpen}
          >
            About
          </button>
          <ul className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
            <li>
              <button type="button" className="navbar-btn">
                Skills
              </button>
            </li>
            <li>
              <button type="button" className="navbar-btn">
                History
              </button>
            </li>
          </ul>
        </li>
        <li className="navbar-item">
          <button type="button" className="navbar-btn">
            Projects
          </button>
        </li>
        <li className="navbar-item">
          <button type="button" className="navbar-btn">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
