import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <h2>Why Choose LubriMax?</h2>

        <p className="about-text">
          We provide premium automotive and industrial lubricants designed to
          maximize engine performance, reduce wear, and ensure long-lasting
          protection for every journey.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>Premium Quality</h3>
            <p>
              Manufactured using advanced formulations for reliable performance.
            </p>
          </div>

          <div className="about-card">
            <h3>Engine Protection</h3>
            <p>
              Reduces friction and extends the lifespan of your engine.
            </p>
          </div>

          <div className="about-card">
            <h3>Trusted Performance</h3>
            <p>
              Suitable for both automotive and industrial applications.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;