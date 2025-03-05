import React, { useState } from "react";
import { FaCaretRight, FaChevronDown } from "react-icons/fa";
import "../css/Configure.css";
import Hero from "../components/Hero";
import LoanImage from "../assets/loan-img.webp";


const Configure = ({ onGetResults, comparetText }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    loanPurpose: "",
    loanAmount: "",
    repaymentPeriod: "",
    incomeSource: "",
    employmentStatus: "",
    address: "",
    city: "",
    country: "",
    additionalInfo: "",
  });

  const [checkboxes, setCheckboxes] = useState({
    agreeTerms: false,
    verifyCredit: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  return (
    <div>
      <Hero
        title="Apply for Your Loan or Mortgage with Confidence"
        subHeading="The Lending Company – Your Trusted Partner in Financing"
        detail="At The Lending Company, we offer tailored loan and mortgage solutions to help you achieve your dreams. Whether you’re buying a home or need personal financing, our process is simple, transparent, and secure. Let us guide you every step of the way."
        linkText="Start Your Application"
        linkHref="#apply"
        className="hero-2"
        imageUrl={LoanImage} // Replace LoanImage with the actual image source
      />
      <section id="apply" className="configure">
        <div className="container small">
          <div className="loan">
            <h2 className="secondry-heading ">Apply Now</h2>
            <div className="input-fields">
              <div className="configure-row">
                {/* Left Column */}
                <div className="col">
                  <label>
                    First Name
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                    />
                  </label>
                  <label>
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </label>
                  <label>
                    Mobile Number
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                    />
                  </label>
                  <label>
                    Loan Purpose
                    <CustomSelect
                      name="loanPurpose"
                      value={formData.loanPurpose}
                      onChange={handleChange}
                      options={[
                        "Home Renovation",
                        "Education",
                        "Medical Expenses",
                        "Business",
                      ]}
                      placeholder="Please Select"
                    />
                  </label>
                  <label>
                    Loan Amount (£)
                    <input
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      placeholder="Enter loan amount"
                    />
                  </label>
                  <label>
                    Additional Information
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Enter any additional information"
                    />
                  </label>
                </div>

                {/* Right Column */}
                <div className="col">
                  <label>
                    Repayment Period (in months)
                    <input
                      type="number"
                      name="repaymentPeriod"
                      value={formData.repaymentPeriod}
                      onChange={handleChange}
                      placeholder="Enter repayment period"
                    />
                  </label>
                  <label>
                    Source of Income
                    <input
                      type="text"
                      name="incomeSource"
                      value={formData.incomeSource}
                      onChange={handleChange}
                      placeholder="Enter your income source"
                    />
                  </label>
                  <label>
                    Employment Status
                    <CustomSelect
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      options={[
                        "Employed",
                        "Self-Employed",
                        "Unemployed",
                        "Retired",
                      ]}
                      placeholder="Please Select"
                    />
                  </label>
                  <label>
                    Address
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                    />
                  </label>
                  <label>
                    City
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                    />
                  </label>
                  <label>
                    Country
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Enter your country"
                    />
                  </label>
                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={checkboxes.agreeTerms}
                        onChange={handleCheckboxChange}
                      />
                      <span>I agree to the Terms and Conditions.</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="verifyCredit"
                        checked={checkboxes.verifyCredit}
                        onChange={handleCheckboxChange}
                      />
                      <span>
                        I allow the company to verify my credit information.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button className="primary-btn results-btn">
                  Submit <FaCaretRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Custom Select Component
const CustomSelect = ({ name, value, onChange, options, placeholder }) => {
    return (
      <div className="custom-select-container">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="custom-select"
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="custom-select-icon">
          <FaChevronDown />
        </div>
      </div>
    );
  };
  
export default Configure;
