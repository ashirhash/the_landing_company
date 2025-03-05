// import React from "react";
// import { FaCaretRight } from "react-icons/fa";
// import '../css/LoanComparisonForm.css';
// const LoanComparisonForm = ({
//   onGetResults,
//   comparetText,
//   loanRequired,
//   setLoanRequired,
//   propertyValue,
//   setPropertyValue,
//   termMonths,
//   setTermMonths,
//   termUnit,
//   loanType,
//   setLoanType,
//   mortgageType,
//   setMortgageType,
// }) => {
//   const handleGetResults = () => {
//     onGetResults();
//   };

//   return (
//     <section className="steps-row" id="steps-row">
//       <div className="container">
//         <div className="loan-col-left">
//           <h2 className="secondary-heading">{comparetText}</h2>
//           <div className="input-fields">
//             {(comparetText === "Buy-to-let Mortgage" || comparetText === "Residential Mortgages") && (
//               <>
//                 <label>
//                   LOAN PURPOSE
//                   <div className="input-wrapper">
//                     <select value={loanType} onChange={(e) => setLoanType(e.target.value)}>
//                       <option value="Purchase">Purchase</option>
//                       <option value="Remortgage">Remortgage</option>
//                     </select>
//                   </div>
//                 </label>
//                 {/* <label>
//                   MORTGAGE TYPE
//                   <div className="input-wrapper">
//                     <select value={mortgageType} onChange={(e) => setMortgageType(e.target.value)}>
//                       <option value="Remortgage">Remortgage</option>
//                       <option value="Purchase">Purchase</option>
//                     </select>
//                   </div>
//                 </label> */}
//               </>
//             )}
//             <label>
//               LOAN REQUIRED
//               <div className="input-wrapper">
//                 <span className="input-prefix">£</span>
//                 <input
//                   type="number"
//                   value={loanRequired}
//                   onChange={(e) => setLoanRequired(e.target.value)}
//                   list="loan-required-suggestions"
//                   placeholder="Enter loan amount"
//                   min="0"
//                 />
//               </div>
//               <datalist id="loan-required-suggestions">
//                 <option value="25000" />
//                 <option value="50000" />
//                 <option value="75000" />
//                 <option value="100000" />
//               </datalist>
//             </label>
//             <label>
//               PROPERTY VALUE
//               <div className="input-wrapper">
//                 <span className="input-prefix">£</span>
//                 <input
//                   type="number"
//                   value={propertyValue}
//                   onChange={(e) => setPropertyValue(e.target.value)}
//                   list="property-value-suggestions"
//                   placeholder="Enter property value"
//                   min="0"
//                 />
//               </div>
//               <datalist id="property-value-suggestions">
//                 <option value="50000" />
//                 <option value="100000" />
//                 <option value="150000" />
//                 <option value="200000" />
//               </datalist>
//             </label>
//             <label>
//               TERM ({termUnit})
//               <div className="input-wrapper">
//                 <span className="input-prefix">£</span>
//                 <input
//                   type="number"
//                   value={termMonths}
//                   onChange={(e) => setTermMonths(e.target.value)}
//                   list="term-months-suggestions"
//                   placeholder="Enter term"
//                   min="0"
//                 />
//               </div>
//               <datalist id="term-months-suggestions">
//                 <option value="6" />
//                 <option value="12" />
//               </datalist>
//             </label>
//           </div>
//           <button onClick={handleGetResults} className="primary-btn results-btn">
//             GET RESULTS <FaCaretRight />
//           </button>
//         </div>
//         <div className="steps">
//           <div className="step">
//             <h4>STEP 1: COMPARE</h4>
//             <p className="default-text">
//               Lift the lid on the latest rates and receive your personalized results.
//             </p>
//           </div>
//           <div className="step">
//             <h4>STEP 2: OPTIMISE</h4>
//             <p className="default-text">
//               Get lenders competing for your business and a bespoke quote within 1 day!
//             </p>
//           </div>
//           <div className="step">
//             <h4>STEP 3: APPLY</h4>
//             <p className="default-text">
//               Complete your deal with the help of our property experts.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoanComparisonForm;


import React from "react";
import { FaCaretRight } from "react-icons/fa";
import '../css/LoanComparisonForm.css';

const LoanComparisonForm = ({
  onGetResults,
  comparetText,
  loanRequired,
  setLoanRequired,
  propertyValue,
  setPropertyValue,
  termMonths,
  setTermMonths,
  termUnit,
  loanType,
  setLoanType,
  paymentMethod,
  setPaymentMethod,
}) => {
  const handleGetResults = () => {
    onGetResults();
  };


  const formatNumber = (value) => {
    return value ? Number(value).toLocaleString() : "";
  };


  const handleInputChange = (value, setter) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setter(numericValue);
  };

  return (
    <section className="steps-row" id="steps-row">
      <div className="container">
        <div className="loan-col-left">
          <h2 className="secondary-heading">{comparetText}</h2>
          <div className="input-fields">
            {(comparetText === "Buy-to-let Mortgage" || comparetText === "Residential Mortgages") && (
              <>
                <label>
                  LOAN PURPOSE
                  {/* <div className="input-wrapper">
                    <select value={loanType} onChange={(e) => setLoanType(e.target.value)}>
                      <option value="Purchase">Purchase</option>
                      <option value="Remortgage">Remortgage</option>
                    </select>
                  </div> */}
                  <div className="input-wrapper" style={{marginTop:"10px",}}>
                <input
                  type="radio"
                  id="purchase"
                  name="loanType"
                  value="Purchase"
                  checked={loanType === "Purchase"}
                  onChange={(e) => setLoanType(e.target.value)}
                />
                <label htmlFor="purchase" style={{paddingLeft:"5px",paddingRight:"25px",}}>Purchase</label>
                <input
                  type="radio"
                  id="remortgage"
                  name="loanType"
                  value="Remortgage"
                  checked={loanType === "Remortgage"}
                  onChange={(e) => setLoanType(e.target.value)}
                />
                <label htmlFor="remortgage"  style={{paddingRight:"5px",paddingLeft:"5px"}}>Remortgage</label>
              </div>
                  
                </label>
              </>
            )}

            <label>
              LOAN REQUIRED
              <div className="input-wrapper">
                <span className="input-prefix">£</span>
                <input
                  type="text"
                  value={formatNumber(loanRequired)}
                  onChange={(e) => handleInputChange(e.target.value, setLoanRequired)}
                  list="loan-required-suggestions"
                  placeholder="Enter loan amount"
                />
              </div>
              <datalist id="loan-required-suggestions">
                <option value="25,000" />
                <option value="50,000" />
                <option value="75,000" />
                <option value="100,000" />
              </datalist>
            </label>
            <label>
              PROPERTY VALUE
              <div className="input-wrapper">
                <span className="input-prefix">£</span>
                <input
                  type="text"
                  value={formatNumber(propertyValue)}
                  onChange={(e) => handleInputChange(e.target.value, setPropertyValue)}
                  list="property-value-suggestions"
                  placeholder="Enter property value"
                />
              </div>
              <datalist id="property-value-suggestions">
                <option value="50,000" />
                <option value="100,000" />
                <option value="150,000" />
                <option value="200,000" />
              </datalist>
            </label>
            <label>
              TERM ({termUnit})
              <div className="input-wrapper">
                <span className="input-prefix" style={{ color: "white" }}>£</span>
                <input
                  type="text"
                  value={formatNumber(termMonths)}
                  onChange={(e) => handleInputChange(e.target.value, setTermMonths)}
                  list="term-months-suggestions"
                  placeholder="Enter term"
                />
              </div>
              <datalist id="term-months-suggestions">
                <option value="6" />
                <option value="12" />
              </datalist>
            </label>
            {(comparetText === "Compare Bridging Loans") && (
              <label >
                Calculation Method
                <div className="input-wrapper" style={{ marginTop: "10px", }}>
                  <input
                    type="radio"
                    id="rolled-up"
                    name="paymentMethod"
                    value="RolledUp"
                    checked={paymentMethod === "RolledUp"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="rolled-up" style={{ paddingLeft: "5px", paddingRight: "25px", }}>Rolled Up</label>
                  <input
                    type="radio"
                    id="retained"
                    name="paymentMethod"
                    value="Retained"
                    checked={paymentMethod === "Retained"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="retained" style={{ paddingRight: "5px", paddingLeft: "5px" }}>Retained</label>
                </div>
              </label>
            )}
            {(comparetText === "Buy-to-let Mortgage") && (
              <label  >
                Loan Type
                <div className="input-wrapper" style={{ marginTop: "10px", }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="interest-only"
                    value="Interest_Only"
                    checked={paymentMethod === "Interest_Only"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  <label htmlFor="interest-only"  style={{ paddingLeft: "5px", paddingRight: "25px", }}>
                    Interest only
                  </label>
                
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="repayment"
                      value="Repayment"
                      checked={paymentMethod === "Repayment"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />{" "}
                      <label htmlFor="repayment" style={{ paddingLeft: "5px", paddingRight: "25px", }}>
                    Repayment
                  </label>
                </div>
              </label>
            )}
          </div>
          <button onClick={handleGetResults} className="primary-btn results-btn">
            GET RESULTS <FaCaretRight />
          </button>
        </div>
        <div className="steps">
          <div className="step">
            <h4>STEP 1: COMPARE</h4>
            <p className="default-text">
              Lift the lid on the latest rates and receive your personalized results.
            </p>
          </div>
          <div className="step">
            <h4>STEP 2: OPTIMISE</h4>
            <p className="default-text">
              Get lenders competing for your business and a bespoke quote within 1 day!
            </p>
          </div>
          <div className="step">
            <h4>STEP 3: APPLY</h4>
            <p className="default-text">
              Complete your deal with the help of our property experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanComparisonForm;