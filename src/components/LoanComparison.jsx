import React, { useState, useEffect } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import Logo1 from "../assets/development-finance.webp";
import Logo2 from "../assets/development-finance.webp";
import LoanComparisonForm from "./LoanComparisonForm";
import FilterDropdown from "./FilterDropdown";
import { Link } from "react-router-dom";
import { fetchMortgageData } from "../services/apiService";
import { RevolvingDot } from 'react-loader-spinner';
// Lender logo mapping
const lenderLogos = {
  "Virgin Money": Logo1,
  "NatWest": Logo2,
  // Add more lenders as needed
};
// Pagination settings
const itemsPerPage = 50;

const LoanComparison = ({ comparetText }) => {
  const [showResults, setShowResults] = useState(false);
  const [lenders, setLenders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Lender");
  const [selectedOptions, setSelectedOptions] = useState({
    propertyType: "",
    loanType: "",
    mortgageType: "",
    ownership: "",
    productPeriod: "",
    epcImprovements: false,
    Fixed: "",
    Variable: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loanRequired, setLoanRequired] = useState("250000");
  const [propertyValue, setPropertyValue] = useState("350000");
  const [termMonths, setTermMonths] = useState(12);
  const [termUnit, setTermUnit] = useState("");
  const [loanType, setLoanType] = useState("Remortgage");
  const [mortgageType, setMortgageType] = useState("Remortgage");
  const [paymentMethod, setPaymentMethod] = useState("");
  useEffect(() => {
    let programsType;
    if (comparetText === "Buy-to-let Mortgage") {
      programsType = "Buy_To_Let";
      setTermMonths(25);
      setTermUnit("Years");
      setPaymentMethod("Interest_Only");
    } else if (comparetText === "Residential Mortgages") {
      programsType = "Standard";
      setTermUnit("Years");
    } else if (comparetText === "Compare Bridging Loans") {
      programsType = "Bridging_Loan";
      setTermUnit("Months");
      setPaymentMethod("RolledUp");
    }
  }, [comparetText]);

  const transformApiData = (data) => {
    const products = data?.["s:Envelope"]?.["s:Body"]?.RunSourceResponse?.RunSourceResult?.Results?.Results;
    if (!products) return [];

    const productsArray = Array.isArray(products) ? products : [products];

    return productsArray.map(product => {
      const fee = parseFloat(product.FeesTotal) || 0;
      const rate = parseFloat(product.InitialPayRate) || 0;
      // const ltv = parseFloat(product.MaxLTVAvailable) || 0;
      const ltv = (loanRequired / propertyValue) * 100 || 0;
      const monthlyCost = parseFloat(product.InitialMonthlyPayment) || 0;
      const totalCost = comparetText === "Compare Bridging Loans" ? parseFloat(product.TrueCostFullTerm) || 0 : parseFloat(product.TrueCostOverInitialPeriod) || 0;
      const valuationFee = parseFloat(product.ValuationFee) || 0;
      const MortgageClass = product.MortgageClass;
      const InitialRatePeriodMonths = product.InitialRatePeriodMonths;
      const StandardVariableRate = product.StandardVariableRate;
      const InitialRatePeriod = product.InitialRatePeriod;
      return {
        logo: lenderLogos[product.LenderName] || Logo1,
        name: product.LenderName,
        rate: `${rate.toFixed(2)}%`,
        rateValue: rate,
        ltv: `LTV ${ltv.toFixed(1)}%`,
        fee: `£${fee.toFixed(2)}`,
        mortgageClass: MortgageClass,
        initialRatePeriodMonths: InitialRatePeriodMonths,
        initialRatePeriod: InitialRatePeriod,
        standardVariableRate: StandardVariableRate,
        feeValue: fee,
        monthlyCost: monthlyCost ? `£${monthlyCost.toFixed(2)}` : "N/A",
        monthlyCostValue: monthlyCost,
        totalCost: totalCost ? `£${totalCost.toFixed(2)}` : "N/A",
        totalCostValue: totalCost,
        valuationFee: `£${valuationFee.toFixed(2)}`,
        valuationFeeValue: valuationFee,
        productCode: product.ProductCode
      };
    });
  };

  const handleGetResults = async (filters = selectedOptions) => {
    setShowResults(true);
    setLoading(true);
    setError(null);

    let programsType;
    if (comparetText === "Buy-to-let Mortgage") {
      programsType = "Buy_To_Let";
      setTermUnit("Years");
    } else if (comparetText === "Residential Mortgages") {
      programsType = "Standard";
      setTermUnit("Years");
    } else if (comparetText === "Compare Bridging Loans") {
      programsType = "Bridging_Loan";
      setTermUnit("Months");
    }

    try {
      console.log("loanType", loanType);
      let loanTypex = loanType;
      const data = await fetchMortgageData(programsType, {
        loanRequired,
        propertyValue,
        termMonths,
        termUnit,
        loanTypex,
        ...(comparetText === "Buy-to-let Mortgage" && { buyToLetPaymentMethod: paymentMethod }),
        ...(comparetText === "Compare Bridging Loans" && { paymentMethod }),
        ...filters, // Pass the selected filters to the API
      });
      const transformed = transformApiData(data);
      setLenders(transformed);
      setCurrentPage(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const sortedLenders = [...lenders].sort((a, b) => {
    switch (selectedSort) {
      case "Lender":
        return a.name.localeCompare(b.name);
      case "Rate":
        return a.rateValue - b.rateValue;
      case "Product Fee":
        return a.feeValue - b.feeValue;
      case "Monthly cost (est.)":
        return a.monthlyCostValue - b.monthlyCostValue;
      case "Total cost (est.)":
        return a.totalCostValue - b.totalCostValue;
      case "Valuation Fee":
        return a.valuationFeeValue - b.valuationFeeValue;
      default:
        return 0;
    }
  });
  const totalPages = Math.ceil(sortedLenders.length / itemsPerPage);
  const paginatedLenders = sortedLenders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleFilterClick = (filter) => {
    setSelectedSort(filter);
    setDropdownOpen(false);
  };
  const handleSaveFilters = async (filters) => {
    setSelectedOptions(filters); // Update the selected filters
    await handleGetResults(filters); // Call the API with the updated filters
  };

  const handleOptionChange = async (category, value) => {
    // Update the selected options
    const updatedOptions = {
      ...selectedOptions,
      [category]: value,
    };

    // Update the state with the new options
    setSelectedOptions(updatedOptions);

    // Call the API with the updated filters
    await handleGetResults(updatedOptions);
  };


  return (
    <>
      {/* <LoanComparisonForm onGetResults={handleGetResults} comparetText={comparetText} /> */}
      <LoanComparisonForm
        onGetResults={handleGetResults}
        comparetText={comparetText}
        loanRequired={loanRequired}
        setLoanRequired={setLoanRequired}
        propertyValue={propertyValue}
        setPropertyValue={setPropertyValue}
        termMonths={termMonths}
        setTermMonths={setTermMonths}
        termUnit={termUnit}
        loanType={loanType}
        setLoanType={setLoanType}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      // mortgageType={mortgageType}
      // setMortgageType={setMortgageType}

      />
      {showResults && (
        <section className="loan-comparison">
          <div className="lender-results">
            <div className="container">
              {/* {loading && <h3 className="loading">Loading lenders...</h3>} */}
              {loading && <div>
                <RevolvingDot
                  height="80"
                  width="80"
                  color="#005ec4"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>}
              {error && <p className="error">Error: {error}</p>}

              {!loading && !error && (
                <>
                  <h2>
                    WE'VE FOUND <span>{lenders.length} LENDERS</span> THAT MATCH YOUR SEARCH.
                  </h2>

                  <div className="filter-sort">
                    {(comparetText === "Buy-to-let Mortgage" || comparetText === "Residential Mortgages") && (
                      <FilterDropdown
                        selectedOptions={selectedOptions}
                        handleOptionChange={handleSaveFilters}
                        comparetText={comparetText}
                      />
                    )}
                    <div>
                      <span className="filter-text">Sort By</span>
                      <div
                        className="sort-dropdown-col"
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                      >
                        <span className="dp-trigger">
                          {selectedSort} <FaCaretDown />
                        </span>
                        <div className={`sort-dropdown ${isDropdownOpen ? "open" : ""}`}>
                          {["Lender", "Rate", "Rate Type", "Initial Period", " Revert Rate", "Product Fee", "Monthly cost (est.)", "Total cost (est.)"].map(
                            (filter) => (
                              <div
                                key={filter}
                                className="dropdown-link-item dropdown-option"
                                onClick={() => handleFilterClick(filter)}
                              >
                                {filter}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Header Buttons */}
                  <div className="main-table">
                    <div className="main-table-inner">
                      <div className={comparetText === "Compare Bridging Loans" ? "lender-header-row-8" : "lender-header-row"}>
                        <button
                          className="lender-btn"
                          onClick={() => handleFilterClick("Lender")}
                        >
                          Lender
                        </button>
                        <button
                          className="lender-btn"
                          onClick={() => handleFilterClick("Rate")}
                        >
                          Rate
                        </button>
                        <button
                          className="lender-btn"
                          onClick={() => handleFilterClick("MortgageClass")}
                        >
                          Rate Type
                        </button>
                        {(comparetText === "Buy-to-let Mortgage" || comparetText === "Residential Mortgages") && (
                          <>
                            <button
                              className="lender-btn"
                              onClick={() => handleFilterClick("InitialRatePeriodMonths")}
                            >
                              Initial Period
                            </button>
                            <button
                              className="lender-btn"
                              onClick={() => handleFilterClick("StandardVariableRate")}
                            >
                              Revert Rate
                            </button>
                          </>
                        )}
                        <button
                          className="lender-btn"
                          onClick={() => handleFilterClick("Product Fee")}
                        >
                          Product Fee
                        </button>
                        <button
                          className="lender-btn"
                          onClick={() => handleFilterClick("Monthly cost (est.)")}
                        >
                          Monthly cost (est.)
                        </button>
                        <button
                          className="lender-btn"
                          onClick={() => handleFilterClick("Total cost (est.)")}
                        >
                          Total cost (est.)
                        </button>
                        <button className="lender-btn" onClick={() => handleFilterClick("Valuation Fee")}>Valuation Fee</button>
                        <button
                          className="lender-btn"
                          onClick={() => handleFilterClick("More")}
                        >
                          More
                        </button>
                      </div>
                      <div className="lender-list">
                        {paginatedLenders?.map((lender, index) => (
                          <div key={index} className={comparetText === "Compare Bridging Loans" ? "lender-item-8" : "lender-item"}>
                            {/* <div className="lender-logo">
                          <img src={lender.logo} alt={lender.name} />
                        </div> */}
                            <div className="col lender-name">
                              <p>{lender.name}</p>
                            </div>
                            <div className="col rate-col">
                              {(comparetText === "Compare Bridging Loans") && (
                                <>
                                  <p>{lender.rate}</p>
                                  <p>{lender.ltv}</p>
                                </>

                              )}
                              {(comparetText === "Buy-to-let Mortgage" || comparetText === "Residential Mortgages") && (
                                <>
                                  <p>{lender.rate} for {lender.initialRatePeriodMonths} Months then {lender.standardVariableRate}% <span>({lender.mortgageClass})</span></p>
                                  <p>{paymentMethod}</p>
                                </>
                              )}
                            </div>
                            <div className="col MortgageClass">
                              <p>{lender.mortgageClass}</p>
                            </div>
                            {(comparetText === "Buy-to-let Mortgage" || comparetText === "Residential Mortgages") && (
                              <>
                                <div className="col InitialRatePeriodMonths">
                                  <p>{lender.initialRatePeriodMonths}<span style={{ paddingLeft: "5px" }}>Months</span></p>
                                  <p>{lender.ltv}</p>
                                </div>
                                <div className="col StandardVariableRate">
                                  <p>{lender.standardVariableRate}</p>
                                </div>
                              </>
                            )}
                            <div className="col fee">
                              <p>{lender.fee}</p>
                            </div>
                            <div className="col month-cost">
                              <p className="al-left">{lender.monthlyCost}</p>
                            </div>
                            <div className="col total-cost">
                              <p>{lender.totalCost}</p>
                            </div>
                            <div className="col valuation-fee">
                              <p>{lender.valuationFee}</p>
                            </div>
                            <div className="more-col">
                              <Link
                                to={`/configure?product=${lender.productCode}`}
                                className="secondry-btn"
                              >
                                Continue
                              </Link>
                              <p className="lender-info">Lender Info</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div>

              </div>
              {/* Pagination Controls */}
              <div className="pagination" style={{ display: totalPages > 1 ? "" : "none", marginTop: "20px" }}>
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="filter-btn"
                >
                  Previous
                </button>

                <span>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="filter-btn"
                >
                  Next
                </button>
              </div>
              <div className="optimizer">
                <p>
                  Our free deal optimiser service saves on average{" "}
                  <span>£10,475</span>.
                </p>
                <button className="secondry-btn">
                  Optimise My Deal <FaCaretRight />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LoanComparison;