import profile from "../images/profile.jpg";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    // Section element id for navigation and styling
    <section id="about-me" className="about-section">
      <div className="container">
        {/* Section title */}
        <h2>About Me</h2>
        {/* Profile picture */}
        <img
          src={profile}
          alt="Profile"
          className="about-image"
        />
        {/*  */}
        <p>
          I'm a Business Information Technology student interested in software
          development and modern web technologies.
        </p>

        <p>
          I'm also interested in software testing and improving the quality and
          reliability of applications.
        </p>

        <p>
          In my free time, I enjoy playing disc golf, videogames and spending time with my
          two cats.
        </p>
        {/* Contact section */}
        <h3>Contact</h3>
        <p>
          {/* Links and styles for email, GitHub & LinkedIn */}
          <a href="mailto:samipoyhonen88@email.com" className="mini-btn" target="_blank"><MdEmail />Email</a> |{" "}
          <a href="https://github.com/gsapo011" className="mini-btn" target="_blank"><FaGithub /> GitHub</a> |{" "}
          <a href="https://www.linkedin.com/in/sami-pöyhönen/" className="mini-btn" target="_blank"><FaLinkedin />LinkedIn</a>
        </p>
      </div>
    </section>
  );
}