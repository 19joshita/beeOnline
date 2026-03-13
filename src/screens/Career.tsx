// src/pages/Career.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./../uis/career.css";

interface JobOpening {
  title: string;
  location: string;
  type: string;
}

const jobs: JobOpening[] = [
  { title: "Frontend Developer", location: "Remote", type: "Full-Time" },
  { title: "Backend Developer", location: "Delhi, India", type: "Full-Time" },
  { title: "UI/UX Designer", location: "Remote", type: "Part-Time" },
  { title: "Cyber Security Analyst", location: "Mumbai, India", type: "Full-Time" },
];

const Career: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <h1>Join Our Team</h1>
        <p>At SnippetVault, we are always looking for talented people to grow with us.</p>
      </section>

      {/* Job Openings */}
      <section className="career-jobs">
        {jobs.map((job, idx) => (
          <div className="career-job-card" key={idx}>
            <h3>{job.title}</h3>
            <p>
              <span>{job.location}</span> | <span>{job.type}</span>
            </p>
            <button
              className="career-apply-btn"
              onClick={() => navigate("/contact")}
            >
              Apply Now
            </button>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="career-cta">
        <h2>Want to be part of our growing team?</h2>
        <button
          className="career-cta-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Career;