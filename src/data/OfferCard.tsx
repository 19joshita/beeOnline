import seo from "../assets/offer/Overlay.png";
import marketing from "../assets/offer/Background.png";
import webside from "../assets/offer/Background (1).png";
import maintanance from "../assets/offer/Background (2).png";
import uxDesign from "../assets/offer/Background (3).png";

export const services = [
  {
    id: 1,
    title: "SEO",
    description:
      "We improve your website's ranking, increase organic traffic, and build long-term visibility through technical excellence, strategic content, and continuous optimization.",
    highlight: true,
    image: seo,
  },

  {
    id: 2,
    title: "Performance Marketing",
    description:
      "Our team increases your ROI by creating results-based paid advertising campaigns on Google, Meta, and other platforms.",
    highlight: false,
    image: marketing,
  },

  {
    id: 3,
    title: "Website Development",
    description:
      "At Bee Online, we offer customised website development options that are suitable for your business needs and goals.",
    highlight: false,
    image: webside,
  },

  {
    id: 4,
    title: "Website Maintenance",
    description:
      "We take care of security updates, backups, monitoring, and fixes in order to maintain your online presence that operates without interruption at all 24/7.",
    highlight: false,
    image: maintanance,
  },

  {
    id: 5,
    title: "UI/UX Design",
    description:
      "We deliver user-centered design that transforms customer journeys, improves engagement, and improves conversion rates across your entire digital ecosystem.",
    highlight: false,
    image: uxDesign,
  },
];