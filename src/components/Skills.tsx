// List of skills to display in the skills section
const skills = ["React", "TypeScript", "JavaScript", "MariaDB", "HTML", "PHP", "CSS", "Git", "Python", "MS Office", "Photoshop", "Robot Framework", "Unreal Engine", "Linux", "WordPress",];

export default function Skills() {
  return (
    // Section element id for navigation and styling
    <section id="skills" className="skills-section">
      {/* Section title */}
      <h2>My Skills</h2>
      {/* Container for all skill badges */}
      <div className="skills-container">
        {/* Map over the skills array and render each skill as a styled badge */}
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
}