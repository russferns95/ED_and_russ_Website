import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="hero-title">
                AI-Powered <br />
                <span className="gradient-text">SMM</span> Smart Solutions
              </h1>

              <p className="hero-desc mt-4">
                AI-powered SEO (Search Engine Optimization) offers a bunch of
                benefits that can save time, boost rankings, and make your
                digital strategy way more efficient.
              </p>

              <button className="btn hero-btn mt-4">ANALYZE YOUR SITE</button>
            </div>
          </div>
        </div>

        <div className="background-text">Crypto Business E-commerce</div>
        <div className="scroll-top">↑</div>
      </section>
    </div>
  );
};

export default HomePage;
