// Type definition for education items
interface EducationItem {
  year: string;        // The year or range of study
  description: string; // Degree, program, or course description
}

// Type definition for work experience items
interface WorkItem {
  year: string;        // The year or range of employment
  company: string;    // Company name 
  role: string;       // Job title or role 
  details?: string;    // Additional description or responsibilities 
}

// Education data array
const educationData: EducationItem[] = [
  {
    year: "2024 -",
    description:
      "Bachelor of Business Administration, Business Information Technology, South-Eastern Finland University of Applied Sciences",
  },
  {
    year: "2015",
    description: "Truck Driver Certificate, Jyväskylä Adult Education Centre",
  },
  {
    year: "2014",
    description: "Logistics Basics, Jyväskylä Adult Education Centre",
  },
  {
    year: "2009",
    description: "IT Basics, Gradia Vocational College",
  },
];

// Work experience data array
const workExperienceData: WorkItem[] = [
  {
    year: "2018 - 2024",
    company: "Finnchat Oy / Humm Oy",
    role: "Customer Delight Specialist",
    details: "Provided customer service and sales via chat (B2B & B2C) for companies including Paytrail, K-Rauta, and Toyota, handling multiple simultaneous customer conversations. Worked within client systems to troubleshoot issues, manage orders, and perform account-level operations. Gained hands-on experience with real production systems and developed strong problem-solving and multitasking skills.",
  },
  {
    year: "2015",
    company: "Kuljetusapu K. Taipale",
    role: "Truck Driver (internship)",
  },
  {
    year: "2015",
    company: "Kuljetusliike Jukka Iiliäinen Oy",
    role: "Truck Driver (internship)",
  },
  {
    year: "2014 - 2015",
    company: "Vähälä Logistics Oy",
    role: "Truck Driver (internship)",
  },
  {
    year: "2012 - 2013",
    company: "Hotelli Vuolake",
    role: "Hospitality / Office Assistant",
  },
  {
    year: "2010",
    company: "Data Group",
    role: "IT Assistant (internship)",
  },
];

// Resume component
export default function Resume() {
  return (
    // Section element id for navigation and styling
    <section id="resume" className="resume-section">
      <div className="container">
        {/* Section title */}
        <h2>Resume</h2>

        {/* Education section */}
        <h3>Education</h3>
        <div className="resume-list">
          {educationData.map((edu, i) => (
            // Each education item is displayed in a card
            <div key={i} className="resume-card">
              {/* Year or range of study */}
              <span className="resume-year">{edu.year}</span>
              {/* Description of the education */}
              <p className="resume-desc">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Work experience section */}
        <h3>Work Experience</h3>
        <div className="resume-list">
          {workExperienceData.map((work, i) => (
            // Each work experience item is displayed in a card
            <div key={i} className="resume-card">
              {/* Year or range of employment */}
              <span className="resume-year">{work.year}</span>
              {/* role */}
              {work.role && <p className="resume-role">{work.role}</p>}
              {/* company */}
              {work.company && <p className="resume-company">{work.company}</p>}
              {/* details / description */}
              {work.details && <p className="resume-desc">{work.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}