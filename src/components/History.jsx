import React from "react";
import "./History.css";

const jobs = [
  {
    company: "TechCorp",
    role: "Frontend Developer",
    year: "2022 - Present",
    description:
      "Building modern web interfaces and collaborating with designers.",
  },
  {
    company: "WebWorks",
    role: "Junior Developer",
    year: "2020 - 2022",
    description:
      "Maintained client websites and learned full-stack development.",
  },
  {
    company: "StartupX",
    role: "Intern",
    year: "2019 - 2020",
    description: "Assisted in developing MVPs and gained hands-on experience.",
  },
];

export default function History() {
  return (
    <section className="history-section">
      <h2>Work History</h2>
      <div className="timeline">
        {jobs.map((job, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{job.company}</h3>
              <span className="timeline-role">{job.role}</span>
              <span className="timeline-year">{job.year}</span>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
