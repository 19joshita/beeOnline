
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../sections/Hero";
import Offer from "../sections/Offer";
import ImpactClients from "../sections/Client";
import LicensedTools from "../sections/LicensedTools";
import LatestBlog from "../sections/LatestBlog";
import CTASection from "../sections/CTASection";
import Footer from "../sections/Footer";
import Testimonial from "../sections/Testimonial";
import TechnologyPartners from "../sections/TechnologyPartners";

const Home = () => {
  return (
    <div>

      <Hero />
      <Offer />
           <ImpactClients />
             <TechnologyPartners/>l
            <LicensedTools />
             <Testimonial />
            <LatestBlog />
 

      <div className="cta-footer-wrHomeer">
        <CTASection/>
        <Footer/> 
      </div>
    </div>
  )
}

export default Home