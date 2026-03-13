import React from "react";
import "./../uis/licensed.css";
import { toolsData } from "../data/Client";


const LicensedTools: React.FC = () => {
  return (
    <section className="tools-section">

      <h3 className="tools-title">
        Licensed + Partnered Tools
      </h3>

      <div className="tools-container">
        {toolsData.map((tool) => (
          <div key={tool.id} className="tool-item">
            <img src={tool.image} alt="tool" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default LicensedTools;