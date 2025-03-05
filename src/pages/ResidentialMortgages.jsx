import React from "react";
import Hero from "../components/Hero"
import CtaSection from "../components/CtaSection"
import QualitySection from "../components/QualitySection";
import NewsletterSection from "../components/NewsletterSection";
import "../css/ProgramPage.css"
// images import 

import ResidentialLoan from "../assets/residential-loan.webp"
import CtaImg1 from "../assets/city-building1.webp"
import CtaImg2 from "../assets/building-img.webp"
import CtaImg3 from "../assets/loan-img.webp"
import CtaImg4 from "../assets/building-img2.webp"
import backgroundImage from "../assets/loan-bg.webp"; 
import LoanComparison from "../components/LoanComparison";

const ResidentialMortgages = () => {
  return (
    <> 
    <Hero
          title="Residential Mortgages – Secure Your Dream Home"
          subHeading="Your Path to Homeownership Starts Here"
          detail="With Residential Mortgages, experience a seamless journey to securing the perfect home, with guidance every step of the way."
          className="hero-1"
          imageUrl={ResidentialLoan}
          id="hero"
        />
        <LoanComparison id="loan-comparison" comparetText="Residential Mortgages" />
     <QualitySection
        preHeader="Reliable Mortgage Solutions"
        mainHeading="Finance Tailored for Homebuyers"
        description="At The Mortgage Group, we provide mortgage solutions to make homeownership a reality. Whether you're a first-time buyer, refinancing, or upgrading, our tailored plans fit your financial goals. With 24/7 access to experts, we're here to simplify the mortgage process. Our mission is to support your journey to homeownership with the resources, flexibility, and guidance you deserve."
        buttonText="Get Started"
        buttonLink="./contact.html"
        backgroundImage={backgroundImage}
      />
      <CtaSection
      ctaDirection="reverse light"
      ctaHeading="Why Choose Our Mortgage Services"
      ctaParagraph="We know that buying a home is one of the most significant investments in your life. That's why we offer a variety of mortgage solutions to suit diverse needs. Our advisors provide dedicated support, helping you make informed decisions with confidence. With us, you’re not just getting a mortgage; you're securing a foundation for your future."
      ctaButtonText="Get Started"
      ctaButtonUrl="/"
      ctaImg1={CtaImg3}
      ctaImg2={CtaImg4}
      altText1="Front Image Description"
      altText2="Back Image Description"
      id="cta-1"
    />
      <CtaSection 
      ctaDirection=""
      ctaHeading="Our Story"
      ctaParagraph="We are committed to helping you achieve homeownership with mortgage solutions that cater to individual needs. With expertise, transparency, and a client-centered approach, we’re here to guide you through the complexities of securing a mortgage. At The Mortgage Group, we're more than just a lender; we're your trusted partner on the journey to a home you can call your own."
      ctaButtonText="Configure Now"
      ctaButtonUrl="/"
      ctaImg1={CtaImg1}
      ctaImg2={CtaImg2}
      altText1="Front Image Description"
      altText2="Back Image Description"
      btnClass="secondry-btn"
      id="cta-2"
    />
    <NewsletterSection id="newsletter"/>
    </>
  );
};

export default ResidentialMortgages;
