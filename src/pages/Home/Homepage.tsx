import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">

      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-8">
              
              {/* Heading */}
              <h1 className="hero-title">
                AI-Powered <br />
                <span className="gradient-text">SMM</span> Smart Solutions
              </h1>

              {/* Description */}
              <p className="hero-desc mt-4">
                AI-powered SEO (Search Engine Optimization) offers a bunch of
                benefits that can save time, boost rankings, and make your
                digital strategy way more efficient.
              </p>

              {/* Button */}
              <button className="btn hero-btn mt-4">
                ANALYZE YOUR SITE
              </button>

            </div>

          </div>
        </div>

        {/* Background faded text */}
        <div className="background-text">
          Crypto Business E-commerce
        </div>

        {/* Scroll top button */}
        <div className="scroll-top">
          ↑
        </div>

      </section>

    </div>
  );
};

export default HomePage;