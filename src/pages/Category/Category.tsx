import { Link } from "react-router-dom";
import "./Category.css";

/* ---------- data ---------- */
const CATEGORY_POSTS = [
  {
    id: 1,
    image: "/images/services/future-mobility.png", // Same image as used in services
    date: "MAY 7, 2025",
    author: "BY KEVIN GARDEN",
    category: "MOTION",
    title: "10 Principles Of Effective Web Design",
    excerpt:
      "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on their marketing budget? It's simple: goal-setting. This is an absolutely essential practice for any digital marketer who knows how to execute their campaigns...",
  },
];

/* ---------- component ---------- */
export default function Category() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="category-page">
      {/* ===== HERO / HEADER ===== */}
      <section className="category-hero-section">
        <div className="category-hero-inner">
          <div className="category-hero-content">
            <h1>Web</h1>
            <div className="category-breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-dot" />
              <span>Category "Web"</span>
            </div>
          </div>
          
          {/* Scroll to top */}
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            ▲
          </button>
        </div>
      </section>

      {/* ===== POSTS LOOP (or single post for match) ===== */}
      <section className="category-posts-section">
        {CATEGORY_POSTS.map((post) => (
          <article className="category-post-card" key={post.id}>
            <div className="category-post-image">
              <img src={post.image} alt={post.title} />
            </div>
            
            <div className="category-post-content">
              <div className="category-post-meta">
                <span>{post.date}</span>
                <span>{post.author}</span>
                <span>{post.category}</span>
              </div>
              
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              
              <div className="category-post-footer">
                <Link to="/blog/post" className="read-more-btn">
                  Read More
                </Link>
                <button className="share-btn" aria-label="Share">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
