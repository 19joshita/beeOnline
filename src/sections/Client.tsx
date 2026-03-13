import React from "react";
import "./../uis/Client.css";

import line from "./../assets/line.png";
import { cardsData } from "../data/Client";
import ClientCard from "../components/client/ClientCard";

const ImpactClients: React.FC = () => {
  return (
    <section className="impact-section">
      <div className="impact-top">
        <div className="impact-header">
          <h2 className="offer-title">
            Impace On Clients
            <img src={line} alt="shape" className="title-shape" />
          </h2>
          <p>Your Growth. Your KPIs. Our Commitment.</p>
        </div>
      </div>

      <div className="impact-bottom">
        <div className="impact-container">
          {cardsData.map((item) => (
          
            <ClientCard key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactClients;
