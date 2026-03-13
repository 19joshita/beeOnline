import React, { useRef } from "react";
import "./../uis/LatestBlog.css";

import container from "./../assets/image (1).png";
import container1 from "./../assets/Container (1).png";
import container2 from "./../assets/image.png";

import {
  HiMiniArrowLongLeft,
  HiMiniArrowLongRight,
} from "react-icons/hi2";

interface Blog {
  title: string;
  image: string;
  category: string[];
  desc: string;
}

const blogs: Blog[] = [
  {
    title:
      "The One Part of the Vision Pro That Apple Doesn’t Want You to See",
    image: container,
    category: ["Technology", "AI"],
    desc:
      "Delve into real-world examples where our Technology Solutions help companies grow.",
  },
  {
    title:
      "Intel’s CEO Says AI Is the Key to the Company’s Comeback",
    image: container1,
    category: ["Technology"],
    desc:
      "Consulting and strategy that drive innovation.",
  },
  {
    title:
      "Polar ID Is the Face ID Rival for Android Phones",
    image: container2,
    category: ["Security", "Mobile"],
    desc:
      "Security and mobile innovation for next generation.",
  },
];

const LatestBlog: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = 350;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="blog-section">

  

      <div className="blog-header">

        <div className="blog-left">
          <h2>Our Latest Blog and News</h2>
        </div>

        <div className="blog-right">

          <p>
            Delve into real-world examples where our Technology
            Solutions, Consulting and Strategy.
          </p>

          <div className="blog-nav">
            <HiMiniArrowLongLeft
              onClick={() => scroll("left")}
            />

            <HiMiniArrowLongRight
              onClick={() => scroll("right")}
            />
          </div>

        </div>

      </div>


  

      <div className="blog-slider" ref={scrollRef}>
        {blogs.map((blog, i) => (
          <div key={i} className="blog-card">

            <img src={blog.image} />

            <div className="tags">
              {blog.category.map((c, j) => (
                <span key={j}>{c}</span>
              ))}
            </div>

            <h4>{blog.title}</h4>

            <button className="read-btn">
              Read More
              <HiMiniArrowLongRight />
            </button>

          </div>
        ))}
      </div>

    </section>
  );
};

export default LatestBlog;