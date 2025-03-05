import React from "react";
import Hero from "../components/Hero";
import CtaSection from "../components/CtaSection";
import QualitySection from "../components/QualitySection";
import NewsletterSection from "../components/NewsletterSection";
// images import 
import buyIt from "../assets/buy-it.webp";
import CtaImg1 from "../assets/city-building1.webp";
import CtaImg2 from "../assets/buy-let-cta.webp";
import CtaImg3 from "../assets/buy-to-let-cta.webp";
import CtaImg4 from "../assets/building-img2.webp";
import backgroundImage from "../assets/city-building1.webp"; 
import LoanComparison from "../components/LoanComparison";

const BuytoLet = () => {
  return (
    <> 
      <Hero
        title="Buy to Let – Investing in Rental Income"
        subHeading="Empowering Landlords with Flexible Finance Options"
        detail="Get competitive rates and expert support to help maximize your investment potential with our Buy to Let financing."
        className="hero-4"
        imageUrl={buyIt}
      />
      <LoanComparison id="loan-comparison" comparetText="Buy-to-let Mortgage" />
      <QualitySection
        preHeader="Supporting Your Investment Goals"
        mainHeading="Tailored Solutions for Buy to Let Success"
        description="Our Buy to Let financing is designed for property investors seeking to generate rental income. With flexible options and expert support, we make financing straightforward so you can focus on maximizing your returns. Whether you're a new landlord or expanding your portfolio, we’re here to guide you through every step."
        buttonText="Get Started"
        buttonLink="./contact.html"
        backgroundImage={backgroundImage} // Pass dynamic image URL as a prop
      />
      <CtaSection
        ctaDirection="reverse light"
        ctaHeading="Why Choose Our Buy to Let Financing?"
        ctaParagraph="Navigating property investments can be complex, but with our Buy to Let solutions, you gain access to tailored, reliable financing. Our advisors offer personalized guidance to help you make the most of your investments, ensuring you have the flexibility to adapt as your portfolio grows. Experience seamless support at every stage."
        ctaButtonText="Get Started"
        ctaButtonUrl="/"
        ctaImg1={CtaImg3}
        ctaImg2={CtaImg4}
        altText1="Investment Support"
        altText2="Flexible Financing Options"
      />
      <CtaSection 
        ctaDirection=""
        ctaHeading="Our Commitment to Landlords"
        ctaParagraph="At The Lending Company, we believe in empowering landlords to achieve their investment goals with confidence. Our approach to Buy to Let financing centers on transparency and dedication. We’re here to offer the resources and expertise needed to support your property investment journey, one milestone at a time."
        ctaButtonText="Learn More"
        ctaButtonUrl="/"
        ctaImg1={CtaImg1}
        ctaImg2={CtaImg2}
        altText1="Our Commitment"
        altText2="Partnering with Investors"
        btnClass="secondry-btn"
      />
      <NewsletterSection/>
    </>
  );
};

export default BuytoLet;
