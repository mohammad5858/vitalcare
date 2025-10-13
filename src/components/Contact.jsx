import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS configuration - you'll need to set these up
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: "your-email@gmail.com", // Replace with your Gmail address
      };

      // You'll need to replace these with your actual EmailJS credentials
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Ready to get started? Send us a message and we'll get back to you as
          soon as possible.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us how we can help you"
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p
              style={{
                color: "#10b981",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              Thank you! Your message has been sent successfully.
            </p>
          )}

          {submitStatus === "error" && (
            <p
              style={{
                color: "#ef4444",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              Sorry, there was an error sending your message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
