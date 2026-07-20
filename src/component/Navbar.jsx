import  "./CSS/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>Job<span>Hustle</span></h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Login</a></li>
      </ul>

      <button className="nav-btn">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;