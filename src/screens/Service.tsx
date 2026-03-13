
import React from "react";
import { useNavigate } from "react-router-dom";
import "./../uis/service.css";
import Offer from "../sections/Offer";



const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="svc-hero">
          <h1>Our Services</h1>
          <p>We provide top-notch solutions to meet your technology needs.</p>
        </section>
      <Offer />
      <div className="svc-page">

        
        <section className="svc-cta">
          <h2>Ready to start your project?</h2>
          <button className="svc-cta-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default Services;
