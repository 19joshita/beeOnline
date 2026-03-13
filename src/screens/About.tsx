// src/pages/AboutUs.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./../uis/aboutus.css";

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
    
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About SnippetVault</h1>
          <p>
            SnippetVault is your go-to platform for all coding snippets, tech solutions, 
            and knowledge sharing. We help developers and teams build faster and smarter.
          </p>
          <button className="about-cta-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-card">
          <h2>Our Mission</h2>
          <p>
            To simplify coding for everyone by providing high-quality, ready-to-use code snippets and tutorials.
          </p>
        </div>
        <div className="about-mission-card">
          <h2>Our Vision</h2>
          <p>
            To be the most trusted platform for developers and tech enthusiasts worldwide.
          </p>
        </div>
        <div className="about-mission-card">
          <h2>Our Values</h2>
          <p>
            Innovation, Collaboration, Quality, and Accessibility are at the core of everything we do.
          </p>
        </div>
      </section>

      
      <section className="about-stats">
        <div className="about-stat-card">
          <h3>500+</h3>
          <p>Code Snippets</p>
        </div>
        <div className="about-stat-card">
          <h3>10k+</h3>
          <p>Active Users</p>
        </div>
        <div className="about-stat-card">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;