import React from "react";
import Hero from "../components/Hero";
import CtaSection from "../components/CtaSection";
import QualitySection from "../components/QualitySection";
import NewsletterSection from "../components/NewsletterSection";
import "../css/ProgramPage.css";
// images import 
import bridgeImg from "../assets/bridge-img.webp";
import CtaImg1 from "../assets/city-building1.webp";
import CtaImg2 from "../assets/lending-bg-1.webp";
import CtaImg3 from "../assets/building-img.webp";
import CtaImg4 from "../assets/building-img2.webp";
import backgroundImage from "../assets/city-building1.webp"; 
import LoanComparison from "../components/LoanComparison";

const BridgingFinance = () => {
  return (
    <> 
      <Hero
        title="Bridging Finance – Short-Term Solutions"
        subHeading="Immediate Funds When You Need Them Most"
        detail="Perfect for property investors needing fast liquidity, our Bridging Finance offers low fees and short-term flexibility."
        className="hero-2"
        imageUrl={bridgeImg}
        id="hero"
      />
      <LoanComparison id="loan-comparison" comparetText="Compare Bridging Loans" />
      <QualitySection
        preHeader="Tailored to Meet Urgent Needs"
        mainHeading="Flexible Financing for Immediate Property Needs"
        description="Our Bridging Finance solution is crafted for property investors requiring fast, flexible capital. Whether you’re managing auction purchases, closing a sale, or refinancing, our team offers support at every stage. With transparent terms and a focus on quick processing, we ensure you have the capital you need to bridge gaps effectively."
        buttonText="Get Started"
        buttonLink="./contact.html"
        backgroundImage={backgroundImage} // Pass dynamic image URL as a prop
      />
      <CtaSection
        ctaDirection="reverse light"
        ctaHeading="Why Choose Bridging Finance with Us?"
        ctaParagraph="Our bridging finance solution is designed for speed and flexibility, offering a straightforward approach to meeting short-term funding gaps. We understand the complexities of property transactions and are committed to providing quick, reliable support. With competitive rates and personalized service, we make financing as smooth and efficient as possible."
        ctaButtonText="Get Started"
        ctaButtonUrl="/"
        ctaImg1={CtaImg3}
        ctaImg2={CtaImg4}
        altText1="Property Investment Support"
        altText2="Seamless Financing Process"
        id="cta-1"
      />
      <CtaSection 
        ctaDirection=""
        ctaHeading="Our Approach"
        ctaParagraph="With an emphasis on partnership, we offer bridging loans that adapt to your unique requirements. Our focus on speed and efficiency means we prioritize fast decisions and flexible solutions that fit your immediate property goals. Bridging Finance at The Lending Company is more than a loan; it’s a bridge to your next opportunity."
        ctaButtonText="Learn More"
        ctaButtonUrl="/"
        ctaImg1={CtaImg1}
        ctaImg2={CtaImg2}
        altText1="Bridging Opportunities"
        altText2="Flexible Lending"
        btnClass="secondry-btn"
        id="cta-2"
      />
      <NewsletterSection/>
    </>
  );
};

export default BridgingFinance;
