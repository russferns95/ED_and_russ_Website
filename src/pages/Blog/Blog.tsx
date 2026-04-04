import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const BlogPage = () => {
  return (
    <div className="blog-page">
      {/* ===== HERO ===== */}
      <section className="blog-hero">
        <h1>Blog</h1>
        <div className="blog-breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-dot" />
          <span>Blog</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="blog-layout">
          {/* Blog Posts Section */}
          <section className="blog-posts">

            {/* Regular Blog Posts */}
            <div className="blog-grid">
              <article className="blog-post">
                <div className="post-image">
                  <img src="/collection/Frame 173.png" alt="Cable Connector" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="category">TECHNOLOGY</span>
                    <span className="date">MAY 5, 2025</span>
                  </div>
                <h1>10 Principles Of Effective Web Design</h1>
                <p className="post-excerpt">
                  Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on their marketing budget? It's simple: goal-setting. This is an absolutely essential practice for any digital marketer who knows how to execute their campaigns...
                </p>
                <div className="post-footer">
                  <span className="author">BY KEVIN GARDEN</span>
                  <a href="BlogPost.tsx" className="read-more">Read More</a>
                </div>
              </div>
              </article>

              <article className="blog-post">
                <div className="post-image">
                  <img src="/collection/Frame 173-2.png" alt="Cable Connector" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="category">DESIGN</span>
                    <span className="date">MAY 5, 2025</span>
                  </div>
                  <h3>7 Easy Techniques for Impressive Code</h3>
                  <p className="post-excerpt">
                    Writing impressive code requires practice and understanding of fundamental programming principles...
                  </p>
                  <div className="post-footer">
                    <span className="author">BY KEVIN GARDEN</span>
                    <a href="BlogPost.tsx" className="read-more">Read More</a>
                  </div>
                </div>
              </article>

              <article className="blog-post">
                <div className="post-image">
                  <img src="/collection/Frame 173-3.png" alt="VR Headset" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="category">DESIGN</span>
                    <span className="date">MAY 3, 2025</span>
                  </div>
                  <h3>Making Your Design Accessible: Easy Tips</h3>
                  <p className="post-excerpt">
                    Accessibility in design ensures that products are usable by people of all abilities and disabilities...
                  </p>
                  <div className="post-footer">
                    <span className="author">BY KEVIN GARDEN</span>
                    <a href="BlogPost.tsx" className="read-more">Read More</a>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="sidebar">
            {/* Profile */}
            <div className="profile">
              <img src="/collection/profile5.jpg" alt="Jane Doe" className="profile-img" />
              <p>
                Hi, I'm Jane Doe, a web designer and developer passionate about creating beautiful and functional websites.
              </p>
              <div className="social-icons">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="recent-posts">
              <h3>Recent Posts</h3>
              <ul>
                <li>10 Principles Of Effective Web Design</li>
                <li>7 Easy Techniques for Impressive Code</li>
                <li>Making Your Design Accessible: Easy Tips</li>
              </ul>
            </div>

            {/* Categories */}
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li>Design</li>
                <li>Development</li>
                <li>Accessibility</li>
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="tags">
              <h3>Popular Tags</h3>
              <div className="tag-list">
                <span>web design</span>
                <span>code</span>
                <span>accessibility</span>
                <span>UX</span>
                <span>UI</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
