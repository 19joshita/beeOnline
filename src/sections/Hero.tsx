import heroImg from "./../assets/home.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import LogoSlider from "../components/logoSlider/LogoSlider";
import "./../uis/Hero.css";
export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-tag">YOUR VISION, OUR EXPERTISE!</p>

          <h1>Award-Winning Digital Marketing Agency for High-Growth Brands</h1>

          <p>
            We help brands in speeding up their growth through strategic
            marketing, brand experiences that are powerful and focused on
            performance execution. Oura solutions are designed to deliver real,
            measurable ROI as we build like driving traffic, improving
            conversions and creating digital ​‍​‌‍​‍‌​‍​‌‍​‍‌assets.
          </p>

          <button className="hero-btn">
            Get A Free Quote{" "}
            <span className="hero-icon">
              <FiArrowUpRight size={14} />
            </span>
          </button>
        </div>

        {/* <div className="hero-card">
          <h2>50+</h2>
          <p>Awards Winning</p>
        </div> */}
      </div>
      <LogoSlider />
    </section>
  );
}
