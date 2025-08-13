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
      "Prototyped new gameplay ideas for greenlight consideration.",
    ],
  },
  {
    company: "Kutta Technologies",
    role: "Software Engineer",
    year: "2018 - 2020",
    description: [
      "Added new features to existing software and maintained legacy code of UGCS software.",
      "Added compatibility for new devices and platforms.",
      "Conducted on-site demonstrations and testing for clients to gather feedback.",
    ],
  },
  {
    company: "PerfOpt",
    role: "Lead Programmer",
    year: "2017 - 2018",
    description: [
      "Guided a team of three to overhaul existing C# codebase to improve performance and stability.",
      "Designed and created ImmTeach Creator app in Unity to be used with ImmTeach Viewer app.",
      "Implemented VR UI for ImmTeach Viewer app capable of being used with multiple VR headsets.",
      "Devised system to create asset bundles and upload to Amazon S3 for use in ImmTeach Viewer app.",
    ],
  },
  {
    company: "TimeFireVR",
    role: "Unreal Developer",
    year: "2016 - 2017",
    description: [
      "Designed and created VR user interface for Hypatia in Unreal Engine 4.",
      "Created character creation system for use in VR.",
      "Optimized performance to meet VR requirements.",
      "Implemented features for theater system to allow users to put on shows.",
    ],
  },
  {
    company: "Safe Communications",
    role: "Unity Developer",
    year: "2013 - 2016",
    description: [
      "Revamped existing Unity codebase to improve performance and stability in Kuboo.",
      "Created code templates for better code reuse.",
      "Optimized network performance to allow for more users in a single instance.",
      "Designed and created Kuboo's character creation system.",
      "Implemented designs for various mini-games in Kuboo.",
    ],
  },
];

export default function History() {
  return (
    <section className="history-section" id="history">
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
