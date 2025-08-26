import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero" id="home">
      <h1>I build tools and interactive worlds</h1>
      <p>
        My name is <span className="highlight">John Johnson</span> and I'm a
        software engineer with a passion for bringing ideas to life through
        code.
      </p>
      <a
        href="https://docs.google.com/document/d/1gY72OzO5hIvmCDyVEzY-6lblpKhXU8aMHEN5rswcYZs/edit?usp=drive_link"
        className="resume-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </a>
    </section>
  );
}
