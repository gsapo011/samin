// List of skills to display in the skills section
const skills = [
  "React",
  "JavaScript / TypeScript",
  "HTML / CSS",
  "SQL (MariaDB / MySQL)",
  "PHP",
  "Python",
  "Git",
  "Linux",
  "WordPress",
  "Robot Framework"
];

export default function Skills() {
  return (
    // Section element id for navigation and styling
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section title */}
        <h2>My Skills</h2>
        {/* Container for all skill badges */}
        <div className="skills-container">
          {/* Map over the skills array and render each skill as a styled badge */}
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}