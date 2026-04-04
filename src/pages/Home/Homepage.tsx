import { useState, useRef, useEffect } from "react";
import "./HomePage.css";
import BentoStats from "./BentoStats/BentoStats";
import Section_6 from "./Section_6/Section_6";

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

const quotesTabsData = [
  "“AI Innovation is revolutionizing industries, redefining our interactions with technology, enhancing efficiency, and opening up new avenues for businesses.”",
  "“Our marketing strategies leverage cutting-edge analytics to drive unprecedented growth and foster meaningful customer relationships.”",
  "“We deliver outstanding support and creative solutions that empower brands to reach their full potential and dominate their market position.”"
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("marketing");
  const [quoteIndex, setQuoteIndex] = useState(0);

  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePrevQuote = () => {
    setQuoteIndex((prev) => (prev === 0 ? quotesTabsData.length - 1 : prev - 1));
  };

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev === quotesTabsData.length - 1 ? 0 : prev + 1));
  };

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
          <div className="smart-solutions__blob smart-solutions__blob--top" aria-hidden="true" />
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
              className={`accordion-item ${activeTab === tab.id ? "expanded" : "collapsed"
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

      {/* ── Stats Quote Section ── */}
      <section className="stats-quote-section">
        <div className="stats-quote-container">

          <div className="quote-card">
            <div className="quote-icon" aria-hidden="true">
              <svg width="60" height="50" viewBox="0 0 100 80" fill="none">
                <path d="M0,40 C0,15, 15,0, 40,0 L40,20 C30,20, 20,30, 20,40 L40,40 L40,80 L0,80 Z M60,40 C60,15, 75,0, 100,0 L100,20 C90,20, 80,30, 80,40 L100,40 L100,80 L60,80 Z" fill="url(#quote-gradient)" />
                <defs>
                  <linearGradient id="quote-gradient" x1="0" y1="0" x2="100" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c38ef8" />
                    <stop offset="1" stopColor="#858fff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <p className="quote-text">{quotesTabsData[quoteIndex]}</p>

            <div className="quote-controls">
              <button className="quote-btn" type="button" onClick={handlePrevQuote} aria-label="Previous quote">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button className="quote-btn" type="button" onClick={handleNextQuote} aria-label="Next quote">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-col-left">
              <h4 className="stats-title">ADS CLICKS</h4>
              <div className="stats-number">+273%</div>
            </div>
            <div className="stats-col-right">
              <p className="stats-desc">
                We specialize in creating, developing, and managing a brand's identity to help businesses stand out in the marketplace and connect with their target audience.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Section_6 />

      <div className="logo-strip-wrapper">
        <div className="logo-strip">
          <div className="logo-item">KOBE</div>
          <div className="logo-item">Proline</div>
          <div className="logo-item">Cactus</div>
          <div className="logo-item">Greenish</div>
          <div className="logo-item">Sitemark</div>
          <div className="logo-item">luminous</div>
          <div className="logo-item">Hamilton</div>
          <div className="logo-item">KOBE</div>
          <div className="logo-item">Proline</div>
        </div>
      </div>


      <div className="contact-section">
        <div className="contact-container">

          {/* LEFT CONTENT */}
          <div className="contact-left">
            <h2>
              We’re here to help <br />
              with your questions.
            </h2>

            <div className="contact-info">
              <div className="info-block">
                <p className="label">EMAIL ADDRESS</p>
                <h4>hello@mysite.com</h4>
              </div>

              <div className="info-block">
                <p className="label">EMAIL ADDRESS</p>
                <h4>hello@mysite.com</h4>
              </div>

              <div className="info-block">
                <p className="label">PHONE NUMBER</p>
                <h4>8 800 2345 234</h4>
              </div>

              <div className="info-block">
                <p className="label">PHONE NUMBER</p>
                <h4>
                  27 Division St, <br />
                  New York, NY 10002, <br />
                  United States
                </h4>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <h3>Get In Touch</h3>

            <form>
              <input type="text" placeholder="Name*" />
              <input type="email" placeholder="Email*" />
              <textarea placeholder="Message*" rows={4}></textarea>

              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;

