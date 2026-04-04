import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      {/* ===== HERO ===== */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <div className="contact-breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-dot" />
          <span>Contact</span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form">
              <h1>Get in Touch</h1>
              <p>Have a question or just want to say hi? We'd love to hear from you.</p>
              
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" name="message" rows={6} required></textarea>
                </div>
                
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to reach out to us through any of the following channels:</p>
              
              <div className="info-item">
                <div className="info-icon">
                  <i>📍</i>
                </div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>123 Business Avenue<br />Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i>📞</i>
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i>✉️</i>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>info@edandruss.com<br />support@edandruss.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i>🕐</i>
                </div>
                <div className="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us on the Map</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7ae3b%3A0x4b7b5e5c5c5c5c5c!2s123%20Business%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ED & Russ Office Location"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What services do you offer?</h3>
              <p>We offer web development, UI/UX design, digital marketing, and consulting services to help your business grow.</p>
            </div>
            <div className="faq-item">
              <h3>How can I get a quote?</h3>
              <p>Simply fill out the contact form or give us a call. We'll get back to you with a detailed quote within 24 hours.</p>
            </div>
            <div className="faq-item">
              <h3>What is your typical project timeline?</h3>
              <p>Project timelines vary depending on complexity, but most projects are completed within 4-12 weeks.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer ongoing support?</h3>
              <p>Yes, we provide comprehensive support and maintenance packages to ensure your project continues to run smoothly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
