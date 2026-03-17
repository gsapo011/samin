import { FaGithub } from "react-icons/fa"; // GitHub icon for links

// Array of projects with title, description, live link, and GitHub link
const projects = [
  {
    title: "Kiekkoselain",
    description:
      "Application for searching disc golf discs. Built with React, TypeScript, Vite, Express & Node.js. Available only in Finnish.",
    github: "https://github.com/gsapo011/kiekkoselain",
    link: "https://kiekkoselain.onrender.com",
  },
  {
    title: "Portfolio",
    description: "My developer portfolio built with React + TypeScript.",
    github: "https://github.com/gsapo011/samin",
    link: "https://sami-gilt.vercel.app",
  },
];

export default function Projects() {
  return (
    // Section element id for navigation and styling
    <section id="projects" className="projects-section">
      {/* Section title */}
      <h2>My projects</h2>

      {/* Grid container for all project cards */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          // Each project is displayed as a card
          <div
            key={i} // Unique key for React rendering
            className="project-card" // CSS class for styling the card
            onClick={() => window.open(project.link, "_blank")} // Clicking the card opens the live project in a new tab
          >
            {/* Project title */}
            <h3>{project.title}</h3>

            {/* Project description */}
            <p>{project.description}</p>

            {/* GitHub button */}
            <a
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer" 
              className="mini-btn" 
              onClick={(e) => e.stopPropagation()} // Prevents the card's onClick from firing when clicking the GitHub link
            >
              <FaGithub /> GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}