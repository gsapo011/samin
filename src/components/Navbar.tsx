import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & close icons

// Navigation sections: id corresponds to section element id, label is the button text
const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "about-me", label: "About/Contact" },
];

const Navbar: React.FC = () => {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // MOBILE menu toggle

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      // For the navbar height to account for fixed navbar offset
      const navbarHeight = document.querySelector(".navbar")?.clientHeight || 0;

      sections.forEach(({ id }, index) => {
        const section = document.getElementById(id);
        if (section) {
          // Calculate the top position of the section minus navbar
          const top = section.offsetTop - navbarHeight - 5;

          // Activate section if scrollY has passed its top
          if (window.scrollY >= top) currentSection = id;

          // Handling for the last section (about/contact): activate when it becomes partially visible
          if (index === sections.length - 1) {
            const sectionVisibleThreshold = section.offsetTop + section.clientHeight * 0.3;
            // Activate when at least 30% of the last section is visible
            if (window.scrollY + window.innerHeight >= sectionVisibleThreshold) {
              currentSection = id;
            }
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on page load

    // Cleanup: remove scroll listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click handler for navigation buttons
  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });

      // set active section for click
      setActiveSection(id);

      // close MOBILE menu after clicking a link
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      {/* hamburger menu toggle for MOBILE */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* nav-list: apply "open" class when MOBILE menu is open */}
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              className={activeSection === id ? "active" : ""}
              onClick={() => handleClick(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;