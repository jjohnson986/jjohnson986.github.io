import React, { useState } from "react";
import "./Projects.css";

import awImg from "../assets/aw_rebootcamp.jpg";
import kubooImg from "../assets/kuboo_banner.jpg";

const projectData = {
  Games: [
    {
      name: "Advance Wars 1+2 Re-Boot Camp",
      status: "Released",
      engine: "Unity",
      platform: "Nintendo Switch",
      role: "General Programmer",
      image: awImg,
      link: "https://www.nintendo.com/us/store/products/advance-wars-1-plus-2-re-boot-camp-switch/",
      description: (
        <div>
          <b>Nintendo description:</b> Lead a cast of colorful characters in
          fun, turn-based battles with two classic campaigns from the beloved
          Advance Wars™ series—fully remade from the ground up!,
        </div>
      ),
      buttonLabel: "Nintendo eShop",
    },
    {
      name: "Hypatia",
      status: "Shutdown",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/401970/header.jpg?t=1551981518",
      link: "https://store.steampowered.com/app/401970/Hypatia/",
      description: (
        <div>
          <b>Steam description:</b> Hypatia – a social and magical place where
          creativity and exploration are the keys to this new world. Chat with
          friends, paint the city, share VR photographs, solve puzzles, join a
          stage play, or create your own fireworks. Hypatia will have you
          smiling for hours to come.
        </div>
      ),
      buttonLabel: "Steam Store Page",
    },
    {
      name: "Kuboo",
      status: "Shutdown",
      image: kubooImg,
      link: "",
      description: (
        <div>
          <b>Description:</b> Kuboo was a virtual world for kids that allowed
          them to play games, create their own avatars, and interact with
          friends in a safe online environment. It was designed to be
          educational and fun, but it has since been discontinued.
        </div>
      ),
    },
  ],
  Other: [
    {
      name: "Portfolio Site",
      status: "Live",
      image: "https://via.placeholder.com/80x80?text=Portfolio",
      link: "https://your-portfolio-link.com",
      description: "Personal portfolio built with React.",
    },
    {
      name: "Portfolio Site",
      status: "Live",
      image: "https://via.placeholder.com/80x80?text=Portfolio",
      link: "https://your-portfolio-link.com",
      description: "Personal portfolio built with React.",
    },
  ],
  Personal: [
    {
      name: "Portfolio Site",
      status: "Live",
      image: "https://via.placeholder.com/80x80?text=Portfolio",
      link: "https://your-portfolio-link.com",
      description: "Personal portfolio built with React.",
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
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-details">
              <div className="project-header">
                <h3 className="project-title">{project.name}</h3>
                <span
                  className={`project-status${
                    project.status.toLowerCase() === "released"
                      ? " status-live"
                      : project.status.toLowerCase() === "shutdown"
                      ? " status-shutdown"
                      : ""
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <div className="project-meta">
                {project.engine && (
                  <p className="project-description">
                    <b>Engine: </b>
                    {project.engine}
                  </p>
                )}
                {project.role && (
                  <p className="project-description">
                    <b>Role: </b>
                    {project.role}
                  </p>
                )}
                {project.platform && (
                  <p className="project-description">
                    <b>Platform: </b>
                    {project.platform}
                  </p>
                )}
              </div>
              <p className="project-description">{project.description}</p>
              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.buttonLabel || "View Project"}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
