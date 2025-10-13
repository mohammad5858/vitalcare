import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="VitalCare Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={() => scrollToSection("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToSection("services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
