import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi! I'm [Your Name], a passionate developer specializing in building
        modern web applications. Explore my work and get in touch!
      </p>
      <a
        href="https://drive.google.com/file/d/1AkwAia_6SGDStdsXgiPzLXEiqIZfS6Yb/view?usp=sharing"
        className="resume-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </a>
    </section>
  );
}
