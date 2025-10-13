import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to VitalCare</h1>
        <p>
          Your trusted partner in health and wellness. We provide exceptional
          care and services to help you live your best life.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
