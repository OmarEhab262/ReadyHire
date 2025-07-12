// src/utils/helpers.js
import img from "../assets/images/team-01.png";
export const getBaseDomain = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  return baseUrl.endsWith("/api/") ? baseUrl.replace("/api/", "") : baseUrl;
};

export const replaceImageUrl = (originalUrl) => {
  const oldDomainRegex = /^https:\/\/[^/]+/;
  const newBaseDomain = getBaseDomain();

  if (typeof originalUrl !== "string" || originalUrl.trim() === "") {
    return img;
  }

  return originalUrl.replace(oldDomainRegex, newBaseDomain);
};
