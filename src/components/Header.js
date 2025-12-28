import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png"; // adjust if name is different

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
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#CV" onClick={() => setMenuOpen(false)}>CV</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
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
