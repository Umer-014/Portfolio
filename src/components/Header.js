import React,{ useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Left side: Logo image + Full Name */}
        <div className="brand">
          <img src={logo} alt="Muhammad Umer Riaz Logo" className="logo-img" />
          <span className="name">Muhammad Umer Riaz</span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/cv" onClick={() => setMenuOpen(false)}>CV</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Header;
