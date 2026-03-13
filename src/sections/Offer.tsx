import React from "react";
import "./../uis/offer.css";
import { FiArrowUpRight } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import line from "./../assets/line.png";
import { services } from "../data/OfferCard";

const Offer: React.FC = () => {
  return (
    <section className="offer-section">
      <div className="offer-grid">
        
        <div className="offer-content">
          <h2 className="offer-title">
            What We Offer
            <img src={line} alt="shape" className="title-shape" />
          </h2>

          <p>
            "Bee Online delivers tailored digital marketing, MLM strategies,
            website development and AI/ML-driven campaigns for your business."
          </p>

          <button className="talk-btn">
            Let's Talk{" "}
            <span>
              <FiArrowUpRight />
            </span>
          </button>
        </div>

        {/* CARDS */}
        {services.map((service: any) => (
          <div
            key={service.id}
          className={`service-card ${service.highlight && "highlight"}`}
          >
            <div className="card-header">
              <img src={service.image} alt={service.title} />
              <h3 className="cart-title">{service.title}</h3>
            </div>
            <p>{service.description}</p>
            <span className="learn">
              Learn More <IoArrowForward />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
