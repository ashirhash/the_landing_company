import React from "react";
import Hero from "../components/Hero";
import CtaSection from "../components/CtaSection";
import QualitySection from "../components/QualitySection";
import NewsletterSection from "../components/NewsletterSection";
// images import
import commercialFinance from "../assets/development-finance.webp";
import CtaImg1 from "../assets/city-building1.webp";
import CtaImg2 from "../assets/lending-bg-1.webp";
import CtaImg3 from "../assets/building-img.webp";
import CtaImg4 from "../assets/building-img2.webp";
import backgroundImage from "../assets/commertial-banner.webp"; 
import LoanComparison from "../components/LoanComparison";

const CommercialMortgages = () => {
  return (
    <> 
      <Hero
        title="Commercial Mortgages – Finance for Your Business Needs"
        subHeading="Empowering Business Growth Through Tailored Mortgage Solutions"
        detail="Our Commercial Mortgages offer flexible financing to support your business property investments, helping you achieve long-term growth and stability."
        className="hero-2"
        imageUrl={commercialFinance}
      />
      <LoanComparison comparetText="Commercial Mortgages" />
      <QualitySection
        preHeader="Quality and Service You Can Rely On"
        mainHeading="Quality and Service You Can Rely On"
        description="At The Lending Company, we understand that every business has unique property needs. Our Commercial Mortgage solutions are tailored to provide the flexibility and support required for business expansion and property investments. With 24/7 access to experienced advisors, we are here to offer the guidance and resources necessary for your success. Your growth is our priority, and we strive to deliver value and reliability with every loan we offer."
        buttonText="Get Started"
        buttonLink="./contact.html"
        backgroundImage={backgroundImage} // Pass dynamic image URL as a prop
      />
      <CtaSection
        ctaDirection="reverse light"
        ctaHeading="Why Choose The Lending Company"
        ctaParagraph="Navigating commercial property finance can be complex, which is why we offer a broad range of solutions to meet your business needs. Our team of experienced advisors is dedicated to providing expert guidance and flexibility, ensuring you have the support necessary to make well-informed decisions. With us, you're more than a client—you're a valued partner on the path to financial success."
        ctaButtonText="Get Started"
        ctaButtonUrl="/"
        ctaImg1={CtaImg3}
        ctaImg2={CtaImg4}
        altText1="Front Image Description"
        altText2="Back Image Description"
      />
      <CtaSection 
        ctaDirection=""
        ctaHeading="Our Story"
        ctaParagraph="The Lending Company is committed to supporting business owners with dependable finance solutions that empower growth. Our approach combines industry expertise with a focus on partnership and transparency. We work closely with our clients to simplify the complexities of commercial finance, offering support every step of the way. At The Lending Company, we're not just a lender; we're your partner in reaching new financial milestones."
        ctaButtonText="Configure Now"
        ctaButtonUrl="/"
        ctaImg1={CtaImg1}
        ctaImg2={CtaImg2}
        altText1="Front Image Description"
        altText2="Back Image Description"
        btnClass="secondry-btn"
      />
      <NewsletterSection/>
    </>
  );
};

export default CommercialMortgages;
