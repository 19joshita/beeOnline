import React from "react";
import "./../uis/CTASection.css";
import { BiSolidBadgeCheck, BiSolidBadgeDollar } from "react-icons/bi";
import { SiThumbtack } from "react-icons/si";

const CTASection: React.FC = () => {
  return (
    <section className="cta">
      <h2>Do you want truly impressive results?</h2>

      <p>
        Ready to elevate your online presence? Get in touch with us today
        for personalized solutions tailored to your business needs.
      </p>

      <div className="cta-features">
        <span><BiSolidBadgeCheck />60+ Team Members</span>
        <span><BiSolidBadgeDollar />Affordable Pricing Plan</span>
        <span> <SiThumbtack />Growth Oriented Strategies</span>
      </div>

      <button>Book a Free Consultation</button>
    </section>
  );
};

export default CTASection;