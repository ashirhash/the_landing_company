
import React, { useState } from "react";

const FilterDropdown = ({ selectedOptions, handleOptionChange, comparetText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(selectedOptions);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // if (comparetText === "Buy-to-let Mortgage") {
  //   programsType = "Buy_To_Let";
  //   setTermUnit("Years");
  // } else if (comparetText === "Residential Mortgages") {
  //   programsType = "Standard";
  //   setTermUnit("Years");
  // } else if (comparetText === "Compare Bridging Loans") {
  //   programsType = "Bridging_Loan";
  //   setTermUnit("Months");
  // }

  const handleTempOptionChange = (category, value) => {
    setTempFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSave = () => {
    handleOptionChange(tempFilters); // Pass the temporary filters to the parent
    setIsOpen(false); // Close the dropdown
  };
  const handleRateTypeChange = (type) => {
    setTempFilters((prev) => {
      const newFilters = { ...prev };
      if (type === "Fixed") {
        newFilters.Fixed = prev.Fixed === "No_Filter" ? "Ignore" : "No_Filter";
      } else if (type === "Variable") {
        newFilters.Variable = prev.Variable === "No_Filter" ? "Ignore" : "No_Filter";
      }
      return newFilters;
    });
  };
  return (
    <div className="filter-dropdown">
      <button className="filter-btn" onClick={toggleDropdown}>
        FILTER <span>&#9776;</span>
      </button>
      {isOpen && (
       
        <div className="filter-options">
           {(comparetText === "Compare Bridging Loans") && (
          <div>
            <h4>Property Type</h4>
            <label>
              <input
                type="radio"
                name="propertyType"
                value="House"
                checked={tempFilters.propertyType === "House"}
                onChange={() => handleTempOptionChange("propertyType", "House")}
              />{" "}
              House
            </label>
            <label>
              <input
                type="radio"
                name="propertyType"
                value="Flat"
                checked={tempFilters.propertyType === "Flat"}
                onChange={() => handleTempOptionChange("propertyType", "Flat")}
              />{" "}
              Flat
            </label>
            <label>
              <input
                type="radio"
                name="propertyType"
                value="Maisonette"
                checked={tempFilters.propertyType === "Maisonette"}
                onChange={() => handleTempOptionChange("propertyType", "Maisonette")}
              />{" "}
              Maisonette
            </label>
            <label>
              <input
                type="radio"
                name="propertyType"
                value="Bungalow"
                checked={tempFilters.propertyType === "Bungalow"}
                onChange={() => handleTempOptionChange("propertyType", "Bungalow")}
              />{" "}
              Bungalow
            </label>
          </div>
          )}

{/* {(comparetText === "Buy-to-let Mortgage" ) && (
          <div>
            <h4>Loan Type</h4>
            <label>
              <input
                type="radio"
                name="loanType"
                value="Interest only"
                checked={tempFilters.loanType === "Interest only"}
                onChange={() => handleTempOptionChange("loanType", "Interest only")}
              />{" "}
              Interest only
            </label>
            <label>
              <input
                type="radio"
                name="loanType"
                value="Repayment"
                checked={tempFilters.loanType === "Repayment"}
                onChange={() => handleTempOptionChange("loanType", "Repayment")}
              />{" "}
              Repayment
            </label>
          </div>
          )} */}

          {/* <div>
            <h4>Mortgage Type</h4>
            <label>
              <input
                type="radio"
                name="mortgageType"
                value="Remortgage"
                checked={tempFilters.mortgageType === "Remortgage"}
                onChange={() => handleTempOptionChange("mortgageType", "Remortgage")}
              />{" "}
              Remortgage
            </label>
            <label>
              <input
                type="radio"
                name="mortgageType"
                value="Purchase"
                checked={tempFilters.mortgageType === "Purchase"}
                onChange={() => handleTempOptionChange("mortgageType", "Purchase")}
              />{" "}
              Purchase
            </label>
          </div> */}
   {(comparetText === "Buy-to-let Mortgage" ) && (
          <div>
            <h4>Ownership</h4>
            <label>
              <input
                type="radio"
                name="ownership"
                value="Personal"
                checked={tempFilters.ownership === "Personal"}
                onChange={() => handleTempOptionChange("ownership", "Personal")}
              />{" "}
              Personal
            </label>
            <label>
              <input
                type="radio"
                name="ownership"
                value="Limited Company SPV"
                checked={tempFilters.ownership === "Limited Company SPV"}
                onChange={() => handleTempOptionChange("ownership", "Limited Company SPV")}
              />{" "}
              Limited Company SPV
            </label>
          </div>
          )}
     {(comparetText === "Buy-to-let Mortgage" ||comparetText === "Residential Mortgages") && (
          <div>
            <h4>Product Period</h4>
            <label>
              <input
                type="radio"
                name="productPeriod"
                value="All"
                checked={tempFilters.productPeriod === "All"}
                onChange={() => handleTempOptionChange("productPeriod", "All")}
              />{" "}
              All
            </label>
            <label>
              <input
                type="radio"
                name="productPeriod"
                value="2 years"
                checked={tempFilters.productPeriod === "2 years"}
                onChange={() => handleTempOptionChange("productPeriod", "2 years")}
              />{" "}
              2 years
            </label>
            <label>
              <input
                type="radio"
                name="productPeriod"
                value="3 years"
                checked={tempFilters.productPeriod === "3 years"}
                onChange={() => handleTempOptionChange("productPeriod", "3 years")}
              />{" "}
              3 years
            </label>
            <label>
              <input
                type="radio"
                name="productPeriod"
                value="5 years"
                checked={tempFilters.productPeriod === "5 years"}
                onChange={() => handleTempOptionChange("productPeriod", "5 years")}
              />{" "}
              5 years
            </label>
            <label>
              <input
                type="radio"
                name="productPeriod"
                value="5+ years"
                checked={tempFilters.productPeriod === "5+ years"}
                onChange={() => handleTempOptionChange("productPeriod", "5+ years")}
              />{" "}
              5+ years
            </label>
          </div>
          )}

          <div>
            <h4>EPC Improvements</h4>
            <label>
              <input
                type="checkbox"
                name="epcImprovements"
                checked={tempFilters.epcImprovements}
                onChange={() => handleTempOptionChange("epcImprovements", !tempFilters.epcImprovements)}
              />{" "}
              EPC improvements
            </label>
          </div>
          <div>
            <h4>Rate Type</h4>
            <input
              type="checkbox"
              name="rateType"
              checked={tempFilters.Fixed === "No_Filter"}
                onChange={() => handleRateTypeChange("Fixed")}
            />{" "}
           <span style={{color:"black",paddingRight:"5px"}}>Fixed</span> 
            <input
              type="checkbox"
              name="rateType"
              checked={tempFilters.Variable === "No_Filter"}
                onChange={() => handleRateTypeChange("Variable")}
            />{" "}
             <span style={{color:"black"}}>Variable</span> 
          </div>


          <button style={{ width: "fit-content", height: "fit-content" }} className="primary-btn results-btn" onClick={handleSave}>
            Save Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;