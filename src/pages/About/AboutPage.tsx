import React from "react";
import "./Aboutpage.css";

const About: React.FC = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="separator">/</span>
            <span className="current">About</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>About ED & Russ</h1>
            <p>We are a team of passionate professionals dedicated to delivering exceptional digital solutions that transform businesses and delight users.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Founded with a vision to bridge the gap between technology and business needs, ED & Russ has been at the forefront of digital innovation for over a decade. We specialize in creating cutting-edge solutions that drive growth and efficiency.</p>
              
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Web Development</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">UI/UX Design</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Digital Marketing</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/collection/Frame 173-2.png" alt="About ED & Russ" />
            </div>
          </div>
        </div>
      </section>

      {/* Join Banner */}
      <section className="join-banner">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Team</h2>
            <p>We're always looking for talented individuals to join our growing team. If you're passionate about technology and innovation, we'd love to hear from you.</p>
            <a href="/contact" className="btn-white">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members">
        <div className="container">
          <div className="team-header">
            <div className="header-left">
              <h2>Meet Our Team</h2>
              <p>Get to know the talented individuals who make ED & Russ exceptional.</p>
            </div>
            <button className="btn-view-all">View All</button>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/collection/profile1.jpg" alt="Team Member" />
              </div>
              <h3 className="member-name">Sarah Johnson</h3>
              <p className="member-role">CEO & Founder</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/collection/profile2.jpg" alt="Team Member" />
              </div>
              <h3 className="member-name">Michael Chen</h3>
              <p className="member-role">CTO</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/collection/profile3.jpg" alt="Team Member" />
              </div>
              <h3 className="member-name">Emily Davis</h3>
              <p className="member-role">Lead Designer</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/collection/profile4.jpg" alt="Team Member" />
              </div>
              <h3 className="member-name">Alex Rodriguez</h3>
              <p className="member-role">Marketing Head</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;