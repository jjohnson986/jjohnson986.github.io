import React from "react";
import "./Skills.css";

const skills = [
  { name: "C#, C++, Unity, Visual Studio", level: 90 },
  { name: "Unreal, Git, JavaScript", level: 70 },
  { name: "TypeScript, HTML, CSS", level: 50 },
  { name: "React, Bootstrap, Copilot", level: 30 },
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
