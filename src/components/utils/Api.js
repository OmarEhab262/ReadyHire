import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;
console.log("baseURL: ", baseURL);

// Load environment variables
const apiRequest = async (method, url, body = {}, token = null) => {
  try {
    // Configure headers
    const headers = {
      "Content-Type": "application/json",
    };

    // Add authorization token if provided
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    if (!baseURL) {
      throw new Error(
        "Base URL is not defined. Please set REACT_APP_API_BASE_URL in your .env file."
      );
    }

    // Create axios instance with custom settings
    const instance = axios.create({
      baseURL,
      timeout: 5000, // Optional: timeout for requests
    });

    // Make the request
    const response = await instance({
      method: method.toLowerCase(),
      url,
      headers,
      data: body, // Attach body for POST/PUT requests
    });

    return response.data; // Return the response data
  } catch (error) {
    console.error("API Request Error:", error.message);
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      throw error.response.data; // Forward the error response
    } else {
      // Network or other unexpected error
      throw error;
    }
  }
};

export default apiRequest;
