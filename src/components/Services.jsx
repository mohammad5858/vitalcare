import React from "react";
import { Heart, Activity, Pill } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Heart size={30} />,
      title: "Chronic Care Management (CCM)",
      features: [
        "Monthly check-ins for patients with chronic conditions",
        "Comprehensive medication review and adherence support",
        "Personalized care plan documentation",
        "Patient education and health coaching",
      ],
    },
    {
      icon: <Activity size={30} />,
      title: "Remote Patient Monitoring (RPM)",
      features: [
        "Daily tracking of vitals (BP, glucose, weight, etc.)",
        "Alerts for abnormal readings",
        "Medication reconciliation and physician updates",
      ],
    },
    {
      icon: <Pill size={30} />,
      title: "Medication Therapy Management (MTM)",
      features: [
        "Pharmacist reviews to optimize therapeutic outcomes",
        "Provider collaboration to resolve drug-related problems",
      ],
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We specialize in comprehensive healthcare management services designed
          to improve patient outcomes and enhance quality of life for those with
          chronic conditions.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
