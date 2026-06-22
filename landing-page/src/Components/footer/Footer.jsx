import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>LubriMax</h2>
          <p>
            Premium automotive and industrial lubricants
            engineered for performance and reliability.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email: info@lubrimax.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Kerala, India</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 LubriMax. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;