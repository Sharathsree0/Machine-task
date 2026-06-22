import "./Nav.css"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>LubriMax</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="btn">Login</button>
    </nav>
  );
}

export default Navbar;