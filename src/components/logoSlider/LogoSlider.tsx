import Slider from "react-slick";
import "./LogoSlider.css";

import logispam from "../../assets/logispan.png";

const logos = [1, 2, 3, 4, 5, 6, 7, 8];

export default function LogoSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {logos.map((_, i) => (
          <div key={i} className="logo-item">
            <img src={logispam} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
