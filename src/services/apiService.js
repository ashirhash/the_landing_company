import axios from "axios";

const NODE_API_URL = "https://lendingcompany.co.uk/api/mortgage";

/**
 * Fetch mortgage data from Node.js server.
 */
export const fetchMortgageData = async (mortgageType, params) => {
  try {
    const response = await axios.post(NODE_API_URL, { mortgageType, params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${mortgageType} mortgage data:`, error);
    throw new Error("Failed to fetch mortgage data");
  }
};
