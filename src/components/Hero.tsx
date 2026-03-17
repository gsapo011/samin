import heroImage from '../images/hero.png'; // Import the hero background image

export default function Hero() {
  return (
    // Section element id for navigation and styling
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      <h1>Sami Pöyhönen</h1>
      <h2>Software Developer | Business Information Technology Student</h2>
    </section>
  );
}