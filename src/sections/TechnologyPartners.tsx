import React from "react";
import "./../uis/technology.css";
import { frameData } from "../data/Client";


const TechnologyPartners: React.FC = () => {
  return (
    <section className="tech">

      <h2>
        Our <span>Technology</span> Partners
      </h2>

      <div className="tech-grid">

        {frameData.map((logo, i) => (
          <div className="tech-card" key={i}>
            <img src={logo.image} />
          </div>
        ))}

      </div>

    </section>
  );
};

export default TechnologyPartners;