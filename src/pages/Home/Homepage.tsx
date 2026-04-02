import "./HomePage.css";

const Home = () => {
  return (
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
  );
};

export default Home;
