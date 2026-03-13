import React, { useState } from "react";
import "./../uis/testimonial.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import logo from "./../assets/kalyan.png";

interface TestimonialItem {
  company: string;
  description: string;
  title: string;
}

const testimonials: TestimonialItem[] = [
  {
    company: "Candere | Kalyan Jewellers",
    title: "Superb Work! Amazing Performance!",
    description:
      "Explore BO’s behind-the-scenes impact when we lowered the CAC from INR 9,960 to INR 4,500 through strategic digital marketing.",
  },
  {
    company: "XYZ Company",
    title: "Great Service",
    description: "Amazing experience working with the team.",
  },
  {
    company: "ABC Corp",
    title: "Fantastic Results",
    description: "Our ROI increased significantly after working together.",
  },
];

const Testimonial: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const data = testimonials[index];

  return (
    <section className="testimonial">

      {/* LEFT */}
      <div className="testimonial-left">
        <h2>Our Testimonial</h2>
        <p>A SYMPHONY OF SATISFIED VOICES!</p>
      </div>


      {/* RIGHT */}
      <div className="testimonial-right">

        <div className="big-quote">“</div>

        <h3>{data.title}</h3>

        <p className="desc">
          {data.description}
        </p>

        <div className="small-quote">”</div>

        <div className="line" />

        <div className="company">
          <img src={logo} />
          <div>
            <strong>{data.company}</strong>
            <p>A Kalyan Jewellers Company</p>
          </div>
        </div>


        <div className="nav">
          <FaArrowLeft onClick={prev} />
          <span>
            {index + 1}/{testimonials.length}
          </span>
          <FaArrowRight onClick={next} />
        </div>

      </div>

    </section>
  );
};

export default Testimonial;