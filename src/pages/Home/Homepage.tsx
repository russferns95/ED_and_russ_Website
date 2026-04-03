import { useState, useRef, useEffect } from "react";
import "./HomePage.css";
import BentoStats from "./BentoStats/BentoStats";

const services = [
  "SEO Services",
  "Social Media Marketing",
  "Content Marketing",
  "Website UI/UX Design",
];

const accordionTabs = [
  {
    id: "marketing",
    title: "Marketing",
    desc: "We specialize in creating, developing, and managing a brand's identity to help businesses stand out in the marketplace and connect with their target audience.",
    bgClass: "bg-marketing",
  },
  {
    id: "support",
    title: "Support",
    desc: "Our support team provides fast and reliable solutions. We ensure your business runs smoothly with 24/7 assistance and technical expertise.",
    bgClass: "bg-support",
  },
  {
    id: "design",
    title: "Design",
    desc: "We craft visually stunning and highly intuitive user interfaces. Our design process guarantees an engaging experience for your audience.",
    bgClass: "bg-design",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("marketing");
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (tabId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveTab(tabId);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__bg-words" aria-hidden="true">
          <span>Crypto</span>
          <span>Business</span>
          <span>E-commerce</span>
        </div>

        <div className="home-hero__content">
          <h1 className="home-hero__title">
            AI-Powered
            <br />
            <span className="home-hero__title-accent">SMM</span>
            <br />
            Smart Solutions
          </h1>

          <p className="home-hero__description">
            AI-powered SEO (Search Engine Optimization) offers a bunch of
            benefits that can save time, boost rankings, and make your digital
            strategy way more efficient.
          </p>

          <button className="home-hero__cta" type="button">
            ANALYZE YOUR SITE
          </button>
        </div>
      </section>

      <BentoStats />

      {/* ── Smart Solutions Section ── */}
      <section className="smart-solutions">

        {/* Left column: blobs sit behind, heading on top */}
        <div className="smart-solutions__left">
          <div className="smart-solutions__blob smart-solutions__blob--top"    aria-hidden="true" />
          <div className="smart-solutions__blob smart-solutions__blob--bottom" aria-hidden="true" />

          <h2 className="smart-solutions__heading">
            Delivering{" "}
            <span className="smart-solutions__heading-accent">
              smart<br />solutions
            </span>{" "}tailored<br />
            to your unique<br />
            goals.
          </h2>
        </div>

        {/* Right column */}
        <div className="smart-solutions__right">
          <p className="smart-solutions__para">
            AI-powered SEO (Search Engine Optimization) offers a bunch of
            benefits that can save time, boost rankings, and make your digital
            strategy way more efficient.
          </p>
          <p className="smart-solutions__para">
            Using AI for SEO is super helpful! It can save you time, improve
            your rankings, and really amp up your online strategy.
          </p>

          <ul className="smart-solutions__services">
            {services.map((s, i) => (
              <li key={s} className="smart-solutions__service-item">
                <span className="smart-solutions__check" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <defs>
                      <linearGradient
                        id={`ss-grad-${i}`}
                        x1="0" y1="0" x2="20" y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#b98af8" />
                        <stop offset="1" stopColor="#7f8cff" />
                      </linearGradient>
                    </defs>
                    <circle cx="10" cy="10" r="10" fill={`url(#ss-grad-${i})`} />
                    <path
                      d="M6 10.5l3 3 5-5"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {s}
              </li>
            ))}
          </ul>

          <button className="smart-solutions__cta" type="button">
            DISCOVER MORE
          </button>
        </div>
      </section>

      {/* ── Services Accordion Section ── */}
      <section className="accordion-section">
        <div className="accordion-bg-text">GN SUPPORT MARKE</div>
        <div className="accordion-container">
          {accordionTabs.map((tab) => (
            <div
              key={tab.id}
              className={`accordion-item ${
                activeTab === tab.id ? "expanded" : "collapsed"
              } ${tab.bgClass}`}
              onMouseEnter={() => handleMouseEnter(tab.id)}
            >
              <div className="accordion-content-box">
                <h3>{tab.title}</h3>
                <p>{tab.desc}</p>
                <button className="accordion-btn" type="button">
                  DISCOVER MORE
                </button>
              </div>

              <div className="accordion-vertical-title">
                <div className="accordion-vertical-inner">
                  <span className="accordion-icon">
                    {activeTab === tab.id ? "✕" : "+"}
                  </span>
                  <span className="accordion-text">{tab.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
