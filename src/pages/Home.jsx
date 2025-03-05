import React from "react";
import HeroHome from "../components/HeroHome";
import CtaSection from "../components/CtaSection"
import QualitySection from "../components/QualitySection";
import ProgramSection from "../components/Program";
import NewsletterSection from "../components/NewsletterSection";
// Import images
import mainSliderImg from "../assets/mainslider-img.webp";
import CtaImg1 from "../assets/city-building1.webp"
import CtaImg2 from "../assets/lending-bg-1.webp"
import CtaImg3 from "../assets/building-img.webp"
import CtaImg4 from "../assets/building-img2.webp"
import backgroundImage from "../assets/city-building1.webp"; 

const Home = () => {
  return (
    <> 
    <HeroHome
          title="Fast, Flexible Property Financing to Power Your Investments"
          subHeading="Flexible, Tailored Finance Solutions for Every Property Journey"
          detail="Need funding for a property purchase, investment, or development? We offer fast, flexible financing—whether you're a first-time buyer or a seasoned investor."
          linkText="Find the Right Loan for You"
          className="hero-0"
          imageUrl={mainSliderImg}
          id="hero"
        />
    <ProgramSection/>
    {/* <ApiCall /> */}
     <QualitySection
        preHeader="Quality and Service You Can Rely On"
        mainHeading="Quality and Service You Can Rely On"
        description="At The Lending Company, we are committed to providing tailored financing solutions that align with your unique property investment goals. Whether you're purchasing at auction, bridging gaps, or developing new projects, our flexible finance options are designed to support your needs. With 24/7 support from experienced advisors, we are here to ensure you have the resources and guidance necessary to succeed. Your financial journey is our priority, and we strive to deliver value with every loan we offer."
        buttonText="Get Started"
        buttonLink="/configure"
        backgroundImage={backgroundImage} // Pass dynamic image URL as a prop
      />
      <CtaSection
      ctaDirection="reverse light"
      ctaHeading="Why Choose The Lending Company"
      ctaParagraph="We understand that property finance can be complex, and each investment journey is unique. That’s why we offer a comprehensive range of solutions tailored to fit your individual needs. Our team of experienced advisors is here to provide guidance and flexibility at every step, ensuring you have the right support to make informed decisions. With us, you’re not just a client—you’re a valued partner in achieving financial success."
      ctaButtonText="Get Started"
      ctaButtonUrl="/configure"
      ctaImg1={CtaImg3}
      ctaImg2={CtaImg4}
      altText1="Front Image Description"
      altText2="Back Image Description"
      id="cta-1"
      
    />
      <CtaSection 
      ctaDirection=""
      ctaHeading="Our Story"
      ctaParagraph="We are a team dedicated to empowering property investors with flexible, reliable finance solutions tailored to meet diverse needs. Our approach is centered on partnership, transparency, and expertise. With deep industry knowledge and a commitment to personalized service, we work closely with clients to navigate the complexities of property finance. At The Lending Company, we’re more than just a lender; we’re your partner in reaching new financial milestones."
      ctaButtonText="Configure Now"
      ctaButtonUrl="/configure"
      ctaImg1={CtaImg1}
      ctaImg2={CtaImg2}
      altText1="Front Image Description"
      altText2="Back Image Description"
      btnClass="secondry-btn"
      id="cta-2"
    />
    <NewsletterSection/>
    </>
  );
};

export default Home;
