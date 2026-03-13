// src/pages/Contact.tsx
import React, { useState } from "react";
import "./../uis/contact.css";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
   
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Send us a message and we’ll get back to you soon.</p>
      </section>

    
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-submit-btn">
            Send Message
          </button>
        </form>
      </section>

  
      <section className="contact-info">
        <div className="contact-info-card">
          <h3>Email</h3>
          <p>support@snippetvault.com</p>
        </div>
        <div className="contact-info-card">
          <h3>Phone</h3>
          <p>+91 9876543210</p>
        </div>
        <div className="contact-info-card">
          <h3>Address</h3>
          <p>Delhi, India</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;