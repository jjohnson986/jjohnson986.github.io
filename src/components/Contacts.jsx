import React from "react";
import "./Contacts.css";

const contacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/johnjohnson986/",
    icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.594v5.602z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/jjohnson986",
    icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.584 8.2-6.081 8.2-11.384 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    url: "mailto:john.johnson986@gmail.com",
    icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4v-9.99l8 6.99 8-6.99V18z" />
      </svg>
    ),
  },
];

export default function Contacts() {
  return (
    <section className="contacts-section">
      <h2>Links</h2>
      <div className="contacts-list">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contact.name}
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
