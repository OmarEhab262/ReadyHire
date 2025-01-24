import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_API_BASE_URL; // Base URL from environment variables

const apiRequest = async (endpoint, method = "GET", bodyData = null) => {
  try {
    const token = Cookies.get("token"); // Get token from js-cookie
    if (!token) {
      throw new Error("Token not found");
    }

    const config = {
      url: `${baseURL}${endpoint}`,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    // Add body data only for methods that support a request body
    if (
      bodyData &&
      (method === "POST" || method === "PUT" || method === "PATCH")
    ) {
      config.data = bodyData;
    }

    const response = await axios(config);
    return response.data; // Return the response data
  } catch (error) {
    console.error("API Request Error:", error.response?.data || error.message);
    throw error;
  }
};

export default apiRequest;
