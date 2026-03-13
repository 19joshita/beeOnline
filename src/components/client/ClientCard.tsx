import React from "react";
import "./../../uis/card.css";

type Props = {
  image: string;
  title: string;
};

const ClientCard: React.FC<Props> = ({ image, title }) => {
  return (
    <div className="client-card">
      <img src={image} className="card-img" />

      <div className="card-body">
        <span className="dot"></span>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ClientCard;