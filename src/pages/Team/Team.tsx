import React from "react";
import "./Team.css";

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/collection/profile1.jpg",
      bio: "Visionary leader with 15+ years of experience in digital transformation and business strategy."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      image: "/collection/profile2.jpg",
      bio: "Full-stack architect specializing in scalable solutions and emerging technologies."
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Creative Director",
      image: "/collection/profile3.jpg",
      bio: "Award-winning designer focused on creating intuitive and beautiful user experiences."
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      role: "Marketing Head",
      image: "/collection/profile4.jpg",
      bio: "Growth marketing expert with a proven track record of scaling digital businesses."
    },
    {
      id: 5,
      name: "Jessica Taylor",
      role: "Lead Developer",
      image: "/collection/profile5.jpg",
      bio: "Senior developer passionate about clean code and innovative web solutions."
    },
    {
      id: 6,
      name: "David Kim",
      role: "UX Designer",
      image: "/collection/profile6.jpg",
      bio: "User experience specialist focused on research-driven design solutions."
    },
    {
      id: 7,
      name: "Lisa Anderson",
      role: "Project Manager",
      image: "/collection/profile7.jpg",
      bio: "Certified PMP with expertise in agile methodologies and team leadership."
    },
    {
      id: 8,
      name: "James Wilson",
      role: "Backend Engineer",
      image: "/collection/profile8.jpg",
      bio: "System architect specializing in high-performance backend solutions."
    }
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="separator">/</span>
            <span className="current">Team</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Meet Our Team</h1>
            <p>Get to know the talented individuals who make ED & Russ a leader in digital innovation.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Team Philosophy</h2>
              <p>At ED & Russ, we believe that great work comes from great people. Our team is composed of diverse talents who share a common passion for innovation and excellence. We foster a collaborative environment where creativity thrives and ideas become reality.</p>
              
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Team Collaboration</span>
                    <span className="skill-percentage">98%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Innovation</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Client Satisfaction</span>
                    <span className="skill-percentage">99%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '99%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/collection/Frame 173-3.png" alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Join Banner */}
      <section className="join-banner">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Amazing Team</h2>
            <p>We're always looking for talented individuals who share our passion for innovation and excellence. If you're ready to make an impact, we'd love to hear from you.</p>
            <a href="/contact" className="btn-white">View Open Positions</a>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members">
        <div className="container">
          <div className="team-header">
            <div className="header-left">
              <h2>Our Leadership Team</h2>
              <p>Meet the experts who drive our success and deliver exceptional results for our clients.</p>
            </div>
            <button className="btn-view-all">View All Members</button>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-member" key={member.id}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="banner">
        <div className="panel">
          <img src="/collection/contract.png" alt="Contract Preparation" />
          <h3>Contract Preparation</h3>
          <p>Begin by clearly identifying the specific social challenge you aim to tackle effectively.</p>
          <a href="/services" className="btn">Discover More</a>
        </div>
        <div className="panel">
          <img src="/collection/analysis.png" alt="Data Analysis Techniques" />
          <h3>Data Analysis Techniques</h3>
          <p>Begin with defining precise and measurable objectives for your online marketing strategies.</p>
          <a href="/services" className="btn">Discover More</a>
        </div>
        <div className="panel">
          <img src="/collection/report.png" alt="Reporting and Analysis" />
          <h3>Reporting and Analysis</h3>
          <p>Examine your digital marketing performance metrics to enhance your strategies.</p>
          <a href="/services" className="btn">Discover More</a>
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <h2>Recent News</h2>
        <div className="news-grid">
          <div className="news-card">
            <h4>New Office Opening</h4>
            <small>March 1, 2025</small>
            <p>We're excited to announce the opening of our new headquarters in downtown.</p><br />
            <a href="/blog" className="btn">Read More</a>
          </div>
          <div className="news-card">
            <h4>Team Expansion</h4>
            <small>February 15, 2025</small>
            <p>Welcome our new team members who joined us this month!</p><br />
            <a href="/blog" className="btn">Read More</a>
          </div>
          <div className="news-card">
            <h4>Award Recognition</h4>
            <small>February 1, 2025</small>
            <p>Our team received recognition for excellence in digital innovation.</p><br />
            <a href="/blog" className="btn">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
