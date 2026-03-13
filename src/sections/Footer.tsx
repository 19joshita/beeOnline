import React, { useState } from "react";
import "./../uis/Footer.css";
import { FaLinkedinIn, FaDiscord, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

import logo from "../assets/Link1png.png"; 

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    console.log("Email submitted:", email);

    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
      
        <div className="footer-about">
          <img src={logo} alt="logo" className="footer-logo" />

          <p>
            Bee Online takes pride in being a valued partner, providing
            customized solutions designed to help you drive revenue and
            reach your goals.
          </p>

          <div className="footer-social">
            <FaLinkedinIn />
            <FaDiscord />
            <FaXTwitter />
            <FaFacebookF />
          </div>
        </div>

 
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
        </div>

        
        <div className="footer-links">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Conditions</a>
        </div>

      
        <div className="footer-subscribe">
          <h4>Subscribe Now</h4>

          <form className="subscribe-box" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">
              <FiSend />
            </button>
          </form>

          <label className="footer-consent">
            <input type="checkbox" defaultChecked />
            by signing up, you agree to receive mail
          </label>
        </div>
      </div>

  
      <div className="footer-bottom">
        <p>© Copyright 2024 Beeonline</p>

        <p>
          103, Quantum Tower, Off, Swami Vivekananda Rd, Malad West, Mumbai,
          Maharashtra 400064
        </p>
      </div>
    </footer>
  );
};

export default Footer;