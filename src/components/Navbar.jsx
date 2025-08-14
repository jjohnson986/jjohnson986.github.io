import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper for smooth scroll
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setAboutOpen(false); // Close dropdown after scroll
    setMenuOpen(false); // Close mobile menu after scroll
  };

  return (
    <nav className="navbar">
      <button
        className="navbar-hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="navbar-hamburger-bar"></span>
        <span className="navbar-hamburger-bar"></span>
        <span className="navbar-hamburger-bar"></span>
      </button>
      <ul className={`navbar-list${menuOpen ? " open" : ""}`}>
        <li className="navbar-item">
          <button
            type="button"
            className="navbar-btn"
            onClick={() => handleScroll("home")}
          >
            Home
          </button>
        </li>
        <li className="navbar-item">
          <button type="button" className="navbar-btn" onClick={() => handleScroll("about")}>About</button>
        </li>
        <li className="navbar-item">
          <button
            type="button"
            className="navbar-btn"
            onClick={() => handleScroll("projects")}
          >
            Projects
          </button>
        </li>
        <li className="navbar-item">
          <button
            type="button"
            className="navbar-btn"
            onClick={() => handleScroll("contacts")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
