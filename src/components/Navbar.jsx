import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  // Helper for smooth scroll
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setAboutOpen(false); // Close dropdown after scroll
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button type="button" className="navbar-btn" onClick={() => handleScroll("home")}>Home</button>
        </li>
        <li className="navbar-item dropdown-toggle" style={{ position: "relative" }}>
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
              <button type="button" className="navbar-btn" onClick={() => handleScroll("skills")}>Skills</button>
            </li>
            <li>
              <button type="button" className="navbar-btn" onClick={() => handleScroll("history")}>History</button>
            </li>
          </ul>
        </li>
        <li className="navbar-item">
          <button type="button" className="navbar-btn" onClick={() => handleScroll("projects")}>Projects</button>
        </li>
        <li className="navbar-item">
          <button type="button" className="navbar-btn" onClick={() => handleScroll("contacts")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}
