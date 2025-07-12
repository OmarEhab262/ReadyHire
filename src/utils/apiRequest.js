import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const user = JSON.parse(localStorage.getItem("user"));

const apiRequest = async (endpoint, method = "GET", bodyData = null) => {
  try {
    const token = user?.token;

    const isFormData = bodyData instanceof FormData;

    const config = {
      url: `${baseURL}${endpoint}`,
      method,
      headers: {
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${token}`,
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
      },
    };

    if (bodyData && ["POST", "PUT", "PATCH"].includes(method)) {
      config.data = bodyData;
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("API Request Error:", error.response?.data || error.message);
    throw error;
  }
};

export default apiRequest;
