import React from "react";
import "./Skills.css";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "CSS", level: 80 },
  { name: "Node.js", level: 75 },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
