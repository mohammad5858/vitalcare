import React from "react";
import patientcare from "../assets/patientcare.jpeg";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About VitalCare</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At VitalCare, we are committed to providing exceptional healthcare
              services that prioritize your well-being and comfort. Our team of
              dedicated professionals works tirelessly to ensure you receive the
              best possible care.
            </p>
            <h3>Why Choose Us?</h3>
            <p>
              With years of experience and a passion for healthcare excellence,
              we offer personalized solutions tailored to your unique needs. We
              believe in building lasting relationships with our clients based
              on trust, compassion, and quality care.
            </p>

            <h3>Why Partner with VitalCare</h3>
            <ul className="benefits-list">
              <li>Improves patient compliance and satisfaction</li>
              <li>Reduces readmissions and complications</li>
            </ul>
            <p className="partnership-quote">
              "We act as an extension of your care team — not a replacement."
            </p>
          </div>
          <div className="about-image">
            <div className="about-logo-container">
              <img src={patientcare} alt="VitalCare Patient Care" className="about-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
