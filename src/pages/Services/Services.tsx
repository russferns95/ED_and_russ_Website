import { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

/* ---------- data ---------- */

const SERVICES = [
  {
    id: "marketing",
    title: "Marketing",
    description:
      "We specialize in creating, developing, and managing a brand's identity to help businesses stand out in the marketplace and connect with their target audience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" stroke="#6366f1" strokeWidth="2" fill="none" />
        <path d="M24 4v40M6 14l18 10 18-10" stroke="#6366f1" strokeWidth="2" />
        <circle cx="14" cy="20" r="3" fill="#a855f7" />
        <circle cx="34" cy="20" r="3" fill="#a855f7" />
        <circle cx="24" cy="30" r="3" fill="#6366f1" />
      </svg>
    ),
  },
  {
    id: "design",
    title: "Design",
    description:
      "We specialize in creating, developing, and managing a brand's identity to help businesses stand out in the marketplace and connect with their target audience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 8h32v32H8z" stroke="#ef4444" strokeWidth="2" fill="none" />
        <path d="M16 16l8-4 8 4v16l-8 4-8-4V16z" stroke="#f97316" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="4" fill="#ef4444" opacity="0.3" />
        <path d="M20 20l8 8M28 20l-8 8" stroke="#ef4444" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "support",
    title: "Support",
    description:
      "We specialize in creating, developing, and managing a brand's identity to help businesses stand out in the marketplace and connect with their target audience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#06b6d4" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="8" stroke="#06b6d4" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="3" fill="#06b6d4" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="#06b6d4" strokeWidth="2" />
      </svg>
    ),
  },
] as const;

const CATEGORIES = ["ALL", "AI DESIGN", "AI ROBOTS", "AR ROBOTS", "UAV TECHNOLOGIES"] as const;

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Future Mobility",
    tags: "AI Robots, UAV Technologies",
    category: "AI ROBOTS",
    image: "/images/services/future-mobility.png",
  },
  {
    id: 2,
    title: "Green AI Robots",
    tags: "AI Design, AI Robots",
    category: "AI DESIGN",
    image: "/images/services/green-ai-robots.png",
  },
  {
    id: 3,
    title: "AR Media",
    tags: "AR Media, UAV Technologies",
    category: "AR ROBOTS",
    image: "/images/services/ar-media.png",
  },
  {
    id: 4,
    title: "People Meet AI",
    tags: "AI Design, AI Robots, UAV Technologies",
    category: "UAV TECHNOLOGIES",
    image: "/images/services/people-meet-ai.png",
  },
];

const PARTNER_LOGOS = [
  {
    name: "Network",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6366f1" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Product.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#0f172a" strokeWidth="2" />
        <path d="M8 12h8M12 8v8" stroke="#0f172a" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Vertigo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="2" />
        <path d="M12 3c3 3 4.5 6 4.5 9s-1.5 6-4.5 9" stroke="#10b981" strokeWidth="2" />
        <path d="M12 3c-3 3-4.5 6-4.5 9s1.5 6 4.5 9" stroke="#10b981" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Proline",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#eab308" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: "Minty",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="#a855f7" strokeWidth="2" fill="none" />
        <path d="M8 12c1-3 3-5 4-5s3 2 4 5-1 5-4 5-5-2-4-5z" fill="#a855f7" opacity="0.3" />
      </svg>
    ),
  },
];

const PRICING_FEATURES = [
  "3 Social Media Account",
  "Free Platform Access",
  "24/7 Customer Support",
] as const;

/* ---------- component ---------- */

export default function Services() {
  const [activeCat, setActiveCat] = useState<string>("ALL");
  const [pricingPlan, setPricingPlan] = useState<"monthly" | "yearly">("monthly");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const filteredPortfolio =
    activeCat === "ALL"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCat);

  return (
    <div className="services-page">
      {/* ===== HERO ===== */}
      <section className="services-hero">
        <h1>Services</h1>
        <div className="services-breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-dot" />
          <span>Services</span>
        </div>
      </section>

      {/* Scroll to top */}
      <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        ▲
      </button>

      {/* ===== MARKETING BANNER ===== */}
      <section className="marketing-banner">
        <div className="marketing-banner-inner">
          <img className="marketing-banner-bg" src="/images/services/marketing-banner.png" alt="Marketing banner background" />
          
          <div className="marketing-banner-content-card">
            <div className="marketing-banner-label">What We Offer</div>
            <h2>
              Encourage More Visits to
              <br />
              Your Website!
            </h2>
            <p>
              AI-powered SEO (Search Engine Optimization) offers a bunch of benefits that can save
              time, boost rankings, and make your digital strategy way more efficient.
            </p>
            <div className="marketing-checklist">
              <div className="marketing-checklist-item">
                <span className="check-icon">✓</span>
                SEO Services
              </div>
              <div className="marketing-checklist-item">
                <span className="check-icon">✓</span>
                Social Media Marketing
              </div>
              <div className="marketing-checklist-item">
                <span className="check-icon">✓</span>
                Content Marketing
              </div>
              <div className="marketing-checklist-item">
                <span className="check-icon">✓</span>
                Website UI/UX Design
              </div>
            </div>
            <button className="discover-btn discover-btn-blue">Discover More</button>
          </div>

          <span className="marketing-vertical-text">Marketing</span>
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <section className="service-cards-section">
        <div className="service-cards-container">
          <div className="service-cards-grid">
            {SERVICES.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="discover-btn discover-btn-outline">Discover More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="marquee-section">
        <div className="marquee-track">
          <span>Design</span>
          <span>Support</span>
          <span>Marketing</span>
          <span>Design</span>
          <span>Support</span>
          <span>Marketing</span>
          <span>Design</span>
          <span>Support</span>
          <span>Marketing</span>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section className="portfolio-section">
        <div className="portfolio-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`portfolio-filter-btn${activeCat === cat ? " active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredPortfolio.map((item) => (
            <div className="portfolio-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="portfolio-card-overlay">
                <div className="portfolio-card-tags">{item.tags}</div>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SEO SECTION ===== */}
      <section className="seo-section">
        <div className="seo-section-inner">
          <div className="seo-left">
            <div className="seo-label">What We Offer</div>
            <h2>
              We offer the most
              <br />
              exceptional <span className="highlight">SEO</span>
              <br />
              services
              <br />
              available.
            </h2>
            <div className="seo-circle" />
          </div>

          <div className="seo-right">
            <p>
              AI-powered SEO (Search Engine Optimization) offers a bunch of benefits that can save
              time, boost rankings, and make your digital strategy way more efficient.
            </p>
            <p>
              Using AI for SEO is super helpful! It can save you time, improve your rankings, and
              really amp up your online strategy.
            </p>
            <div className="seo-checklist">
              <div className="seo-checklist-item">
                <span className="seo-check">✓</span>
                SEO Services
              </div>
              <div className="seo-checklist-item">
                <span className="seo-check">✓</span>
                Social Media Marketing
              </div>
              <div className="seo-checklist-item">
                <span className="seo-check">✓</span>
                Content Marketing
              </div>
              <div className="seo-checklist-item">
                <span className="seo-check">✓</span>
                Website UI/UX Design
              </div>
            </div>
            <div style={{ marginTop: '28px' }}>
              <button className="discover-btn" style={{ borderColor: '#6366f1', color: '#6366f1' }}>Discover More</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing-section">
        <h2>
          Choose a plan that
          <br />
          works for you
        </h2>

        <div className="pricing-toggle">
          <button
            className={`pricing-toggle-btn${pricingPlan === "monthly" ? " active" : ""}`}
            onClick={() => setPricingPlan("monthly")}
          >
            Monthly
          </button>
          <button
            className={`pricing-toggle-btn${pricingPlan === "yearly" ? " active" : ""}`}
            onClick={() => setPricingPlan("yearly")}
          >
            Yearly
          </button>
        </div>

        <div className="pricing-cards">
          {/* Starter */}
          <div className="pricing-card starter">
            <div className="pricing-card-label">Starter</div>
            <div className="pricing-card-price">
              ${pricingPlan === "monthly" ? "9" : "89"} <span>/{pricingPlan === "monthly" ? "mo" : "yr"}</span>
            </div>
            <p>
              Ea pro tibique comprehensam, sed ea verear numquam moderatius. Nom te omittam
              comprehensam. Ne nam nonumy putent fabellas, neque fabellas uas ne.
            </p>
            <ul className="pricing-features">
              {PRICING_FEATURES.map((feature) => (
                <li key={feature}>
                  <span className="pricing-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="discover-btn">Discover More</button>
          </div>

          {/* Business */}
          <div className="pricing-card business">
            <div className="pricing-card-label">Business</div>
            <div className="pricing-card-price">
              ${pricingPlan === "monthly" ? "29" : "289"} <span>/{pricingPlan === "monthly" ? "mo" : "yr"}</span>
            </div>
            <p>
              Ea pro tibique comprehensam, sed ea verear numquam moderatius. Nom te omittam
              comprehensam. Ne nam nonumy putent fabellas, neque fabellas uas ne.
            </p>
            <ul className="pricing-features">
              {PRICING_FEATURES.map((feature) => (
                <li key={feature}>
                  <span className="pricing-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="discover-btn">Discover More</button>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="partners-section">
        <div className="partners-logos">
          {PARTNER_LOGOS.map((partner) => (
            <div className="partner-logo" key={partner.name}>
              <div className="partner-logo-icon">{partner.icon}</div>
              {partner.name}
            </div>
          ))}
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <h2>Say Hello to Ewebot!</h2>
          <p>
            Sing up for Newsletter and receive 40% discount on
            <br />
            first project
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" aria-label="Email Address" />
            <button type="submit" className="newsletter-send-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
