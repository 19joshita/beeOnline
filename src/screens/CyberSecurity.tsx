// src/pages/CyberSecurity.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaLock, FaBug, FaNetworkWired } from "react-icons/fa";
import "./../uis/cyberSecurity.css";

interface CyberFeature {
  icon: any;
  title: string;
  description: string;
}

const cyberFeatures: CyberFeature[] = [
  {
    icon: <FaShieldAlt />,
    title: "Penetration Testing",
    description: "Identify vulnerabilities and strengthen your system security.",
  },
  {
    icon: <FaLock />,
    title: "Data Protection",
    description: "Secure sensitive information and prevent data breaches.",
  },
  {
    icon: <FaBug />,
    title: "Vulnerability Assessment",
    description: "Detect potential threats before they become issues.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Network Security",
    description: "Protect your network from attacks and unauthorized access.",
  },
];

const CyberSecurity: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="cyber-page">
  
      <section className="cyber-hero">
        <h1>Cyber Security Solutions</h1>
        <p>Protect your business, data, and users with our comprehensive security solutions.</p>
      </section>

     
      <section className="cyber-features">
        {cyberFeatures.map((feature, idx) => (
          <div className="cyber-card" key={idx}>
            <div className="cyber-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      
      <section className="cyber-cta">
        <h2>Need expert guidance for your security?</h2>
        <button className="cyber-cta-btn" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CyberSecurity;