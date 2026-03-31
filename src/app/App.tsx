import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/*import Navbar from "../pages/components/layout/Navbar/Navbar";*/
import Footer from "../pages/components/layout/Footer/Footer";

import "../pages/Home/HomePage.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar /> 

      {/* HERO SECTION */}
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

              <button className="btn hero-btn mt-4">
                ANALYZE YOUR SITE
              </button>

            </div>

          </div>
        </div>

        {/* Background Text */}
        <div className="background-text">
          Crypto Business E-commerce
        </div>

        {/* Scroll Button */}
        <div className="scroll-top">↑</div>

      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;