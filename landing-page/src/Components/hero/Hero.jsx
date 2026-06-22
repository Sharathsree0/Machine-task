import "./hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Premium Automotive & Industrial Lubricants</h1>
          <p>
            High-performance lubricant oils designed to improve engine
            efficiency and extend machinery life.
          </p>
          <button className="hero-btn">
            <a href="#products">Explore Products</a>
          </button>
        </div>

        <div className="hero-image">
          <img src={"https://upload.wikimedia.org/wikipedia/commons/6/68/SIGAUS_aceite.jpg"} alt="Lubricant Oil" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
