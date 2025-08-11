import React from "react";
import "./History.css";

const jobs = [
  {
    company: "WayForward Technologies",
    role: "Generalist Programmer",
    year: "2020-2023",
    description: [
      "Utilized utility AI system in C# for Advance Wars 1+2 project.",
      "Revamped Online UI/UX to meet Nintendo's online play requirements.",
      "Reduced memory usage and optimized frame rates for console release.",
      "Migrated legacy projects from Cocos Creator to Unity.",
      "Prototyped new gameplay ideas for greenlight consideration.",
    ],
  },
  {
    company: "WebWorks",
    role: "Junior Developer",
    year: "2018 - 2020",
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
              {Array.isArray(job.description) ? (
                <ul>
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p>{job.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
