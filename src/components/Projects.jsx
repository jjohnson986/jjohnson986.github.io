import React, { useState } from "react";
import "./Projects.css";

const projectData = {
  Games: [
    {
      name: "Portfolio Site",
      description: "Personal portfolio built with React.",
    },
    {
      name: "E-commerce App",
      description: "Online store with payment integration.",
    },
  ],
  Other: [
    {
      name: "Fitness Tracker",
      description: "React Native app for tracking workouts.",
    },
    {
      name: "Recipe App",
      description: "Mobile app for browsing and saving recipes.",
    },
  ],
  Personal: [
    {
      name: "CLI Tool",
      description: "Node.js command-line utility for automation.",
    },
  ],
};

const tabs = Object.keys(projectData);

export default function Projects() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`projects-tab${activeTab === tab ? " active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <ul className="projects-list">
        {projectData[activeTab].map((project) => (
          <li key={project.name} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
