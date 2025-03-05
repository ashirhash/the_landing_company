import React, { useState, useEffect, useRef } from "react";
import "../css/Hero.css";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const HeroHome = ({ id, title, subHeading, detail, linkText, className, imageUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      {
        rootMargin: "200px", 
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const backgroundStyle = {
    background: isVisible
      ? `linear-gradient(to bottom right, rgba(0, 0, 0, 0.859) 10%, rgba(0, 0, 0, 0.197) 100%), url(${imageUrl}) no-repeat center / cover`
      : `linear-gradient(to bottom right, rgba(0, 0, 0, 0.859) 10%, rgba(0, 0, 0, 0.197) 100%)`, // Fallback gradient background
  };

  return (
    <div id={`${id}`} className={`banner ${className}`} style={backgroundStyle} ref={heroRef}>
      <div className="container">
        <div className="banner-left">
          <h1>{title}</h1>
          <span className="sub-heading">{subHeading}</span>
          <p className="banner-detail">{detail}</p>
          <span className="banner-explore-text">{linkText}</span>
          <div className="progam-bts-row">
            <Link to="/bridging-finance" className="secondry-btn">
              Bridging Finance <FaCaretRight />
            </Link>
            <Link to="/buy-to-let" className="secondry-btn">
              Buy to Let <FaCaretRight />
            </Link>
            <Link to="/residential-mortgages" className="secondry-btn">
              Residential Mortgages <FaCaretRight />
            </Link>
            <Link to="/commercial-mortgages" className="secondry-btn">
              Commercial Mortgages <FaCaretRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;