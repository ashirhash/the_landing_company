import React from "react";
import "../css/NewsletterSection.css";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section" id="newsletter">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-left">
            <span className="pre-header">Empowering Property Investors</span>
            <h2 className="secondry-heading">Stay Informed with The Lending Company</h2>
          </div>
          <div className="newsletter-right">
            <p className="default-text">
              Join our mailing list to receive the latest insights, updates, and financial solutions
              tailored for property investors. Stay connected and informed with expert tips and market trends.
            </p>
            <form className="form-signup" id="newsletter-form" name="newsletter-form" data-name="Newsletter Form" method="get" aria-label="Newsletter Form">
              <input
                className="input-field"
                name="email"
                id="email"
                placeholder="Your Email Address"
                type="email"
                required
              />
              <button className="primary-btn">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
