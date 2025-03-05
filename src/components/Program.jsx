import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBridge, faBuilding, faHome, faLandmark } from '@fortawesome/free-solid-svg-icons';
import "../css/Program.css"; // Use the same styling
import { Link } from 'react-router-dom';

const Program = () => {
  return (
    <section id="programs" className="programs">
        <div className="container">
            <span className="pre-header" >Our Services</span>
            <h2 className="secondry-heading" >Find the right loan for you</h2>
            <p className="default-text" >
                We offer tailored financing solutions for various property investment needs. Whether you're looking for auction funding, development financing, or other solutions, we've got you covered.
            </p>
            <div className="program-row" >
                
                <div className="program-card">
                    <div className="program-img-wrapper">
                        <FontAwesomeIcon icon={faBridge} className="program-icon"/>
                    </div>
                    <div className="program-card-body">
                        <h4 className="program-title">Bridging Finance</h4>
                        <p className="program-description">Short-term loans to bridge property funding gaps.</p>
                        {/* <Link to="/bridging-finance" className="primary-btn">Compare Now</Link> */}
                    </div>
                </div>                
                <div className="program-card">
                    <div className="program-img-wrapper">
                        <FontAwesomeIcon icon={faLandmark} className="program-icon" /> 
                    </div>
                    <div className="program-card-body">
                        <h4 className="program-title">Buy to Let</h4>
                        <p className="program-description">Loans for purchasing rental properties.</p>
                        {/* <Link to="/buy-to-let" className="primary-btn">Compare Now</Link> */}
                    </div>
                </div>
                <div className="program-card">
                    <div className="program-img-wrapper">
                        <FontAwesomeIcon icon={faHome} className="program-icon"/> 
                    </div>
                    <div className="program-card-body">
                        <h4 className="program-title">Residential Mortgages</h4>
                        <p className="program-description">Long-term loans for buying residential homes.</p> 
                        {/* <Link to="/residential-mortgages" className="primary-btn">Compare Now</Link> */}
                    </div>
                </div>
                <div className="program-card">
                    <div className="program-img-wrapper">
                        <FontAwesomeIcon icon={faBuilding} className="program-icon" /> 
                    </div>
                    <div className="program-card-body">
                        <h4 className="program-title">Commercial Mortgages</h4>
                        <p className="program-description">Finance for buying or refinancing business properties.</p>
                        {/* <Link to="/commercial-mortgages" className="primary-btn">Compare Now</Link> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Program;
