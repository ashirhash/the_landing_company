const express = require("express");
const axios = require("axios");
const xml2js = require("xml2js");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Allow requests from frontend

const API_URL = "https://stagingapi.twenty7tec.com/sourcing.svc?wsdl";
const LICENSE_KEY = "881918bf-c118-48f3-982d-6678fa4cf37d";
const COMPANY_ID = "VLYZVW";
const SITE_ID = "BTMIKK";

/**
 * Generates a SOAP request body dynamically based on mortgage type and parameters.
 */
const generateSoapRequestBody = (mortgageType, params) => {
  let productTermPeriodFromMonths = "";
  let productTermPeriodToMonths = "";
  let GreenEcoProduct = "";
  let brigingPaymentMethod = "";
  let buyToLetPaymentMethod = ""
  let MortgageClass = "";
  let Ownership = "";
  if (params.Fixed === "" && params.Variable === "") {
  MortgageClass = "";
  }else{
    MortgageClass = `<tem:MortgageClass>
  <tem:Fixed>${params.Fixed === "No_Filter" ? "No_Filter" : "Ignore"}</tem:Fixed>
  <tem:Variable>${params.Variable === "No_Filter" ? "No_Filter" : "Ignore"}</tem:Variable>
</tem:MortgageClass>`;
  }

  if (params.Ownership==="Limited Company SPV") {
    Ownership = `<tem:BuyToLetDetails>
                 <tem:LimitedCompanySPV>Yes</tem:LimitedCompanySPV>
                 </tem:BuyToLetDetails>`;
     }
     if (params.Ownership==="Personal") {
      Ownership = `<tem:BuyToLetDetails>  
                    <tem:LimitedCompanySPV>No</tem:LimitedCompanySPV>
                    </tem:BuyToLetDetails>`;
       }
                


  if (params.paymentMethod) {
    brigingPaymentMethod = `<tem:SecuredLoanDetails>
       <tem:BridgingDetails>
        <tem:BridgingPaymentMethod>${params.paymentMethod}</tem:BridgingPaymentMethod>
        </tem:BridgingDetails>
        </tem:SecuredLoanDetails>`
  }
  if (params.buyToLetPaymentMethod) {
    buyToLetPaymentMethod = `
      <tem:PaymentMethod>${params.buyToLetPaymentMethod}</tem:PaymentMethod>
     `
  }
  switch (params.epcImprovements) {
    case true:
      GreenEcoProduct = "<tem:GreenEcoProduct>Include</tem:GreenEcoProduct>";
      break;
    default:
      GreenEcoProduct = '';
  }
  switch (params.productPeriod) {
    case "All":
      productTermPeriodFromMonths = '';
      productTermPeriodToMonths = '';
      break;
    case "5+ years":
      productTermPeriodFromMonths = "<tem:ProductTermPeriodFromMonths>60</tem:ProductTermPeriodFromMonths>";
      productTermPeriodToMonths = "<tem:ProductTermPeriodToMonths>75</tem:ProductTermPeriodToMonths>";
      break;
    case "2 years":
      productTermPeriodFromMonths = "<tem:ProductTermPeriodFromMonths>24</tem:ProductTermPeriodFromMonths>";
      productTermPeriodToMonths = "<tem:ProductTermPeriodToMonths>24</tem:ProductTermPeriodToMonths>";
      break;
    case "3 years":
      productTermPeriodFromMonths = "<tem:ProductTermPeriodFromMonths>36</tem:ProductTermPeriodFromMonths>";
      productTermPeriodToMonths = "<tem:ProductTermPeriodToMonths>36</tem:ProductTermPeriodToMonths>";
      break;
    case "4 years":
      productTermPeriodFromMonths = "<tem:ProductTermPeriodFromMonths>48</tem:ProductTermPeriodFromMonths>";
      productTermPeriodToMonths = "<tem:ProductTermPeriodToMonths>75</tem:ProductTermPeriodToMonths>";
      break;
    case "5 years":
      productTermPeriodFromMonths = "<tem:ProductTermPeriodFromMonths>60</tem:ProductTermPeriodFromMonths>";
      productTermPeriodToMonths = "<tem:ProductTermPeriodToMonths>60</tem:ProductTermPeriodToMonths>";
      break;
    default:
      productTermPeriodFromMonths = '';
      productTermPeriodToMonths = '';
  }

  return `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
     <soapenv:Header/>
     <soapenv:Body>
        <tem:RunSource>
           <tem:licenseKey>${LICENSE_KEY}</tem:licenseKey>
           <tem:input>
              <tem:CompanyId>${COMPANY_ID}</tem:CompanyId>
              <tem:SiteId>${SITE_ID}</tem:SiteId>
              <tem:ExpectedValuation>${params.expectedValuation || 0}</tem:ExpectedValuation>
              <tem:LoanRequired>${params.loanRequired || 0}</tem:LoanRequired>
              <tem:ReasonForMortgage>${params.loanTypex || "Purchase"}</tem:ReasonForMortgage>
              <tem:MortgageType>${mortgageType}</tem:MortgageType>
              <tem:Term>${params.termMonths || 0}</tem:Term>
              <tem:TermUnit>${params.termUnit || "Years"}</tem:TermUnit>
              ${MortgageClass}
              <tem:PropertyDetails>
                <tem:PropertyType>${params.propertyType || "House"}</tem:PropertyType>
              </tem:PropertyDetails>
               <tem:Filters>
                ${productTermPeriodFromMonths}
                ${productTermPeriodToMonths}
                ${GreenEcoProduct}

            </tem:Filters>
            ${brigingPaymentMethod}
            ${buyToLetPaymentMethod}
            ${Ownership}
           </tem:input>
        </tem:RunSource>
     </soapenv:Body>
  </soapenv:Envelope>
    `;
};

/**
 * API route to fetch mortgage data.
 */
app.post("/api/mortgage", async (req, res) => {
  try {
    const { mortgageType, params } = req.body;

    const requestBody = generateSoapRequestBody(mortgageType, params);
    console.log(requestBody);
    const response = await axios.post(API_URL, requestBody, {
      headers: {
        "Content-Type": "text/xml;charset=UTF-8",
        "SOAPAction": "http://tempuri.org/ISourcing/RunSource",
      },
    });

    const parsedData = await parseXmlResponse(response.data);
    res.json(parsedData);
  } catch (error) {
    console.error("Error fetching mortgage data:", error);
    res.status(500).json({ error: "Failed to fetch mortgage data" });
  }
});

/**
 * Parses XML response into a JSON object.
 */
const parseXmlResponse = (xmlData) => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xmlData, { explicitArray: false }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// Serve static files from React app
app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
