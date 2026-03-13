// src/pages/Blog.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./../uis/blog.css";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Top 10 JavaScript Tips for Developers",
    excerpt: "Learn the most effective JavaScript tricks and best practices to enhance your coding workflow.",
    date: "March 10, 2026",
  },
  {
    title: "Understanding React Hooks",
    excerpt: "A complete guide to React Hooks and how to use them in modern React development.",
    date: "March 8, 2026",
  },
  {
    title: "Cyber Security Best Practices",
    excerpt: "Keep your web applications safe with these essential cyber security practices.",
    date: "March 5, 2026",
  },
  {
    title: "Cloud Computing Trends in 2026",
    excerpt: "Explore the latest trends in cloud computing and how businesses are leveraging the cloud.",
    date: "March 1, 2026",
  },
];

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-page">
      
      <section className="blog-hero">
        <h1>Our Blog</h1>
        <p>Explore articles, tips, and insights from SnippetVault.</p>
      </section>

     
      <section className="blog-cards">
        {blogPosts.map((post, idx) => (
          <div className="blog-card" key={idx}>
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
            <button className="blog-read-btn" onClick={() => navigate("/contact")}>
              Read More
            </button>
          </div>
        ))}
      </section>

   
      <section className="blog-cta">
        <h2>Have questions or want to collaborate?</h2>
        <button className="blog-cta-btn" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Blog;