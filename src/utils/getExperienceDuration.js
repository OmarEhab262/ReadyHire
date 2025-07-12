export const getExperienceDuration = (startDate, endDate) => {
  if (!startDate || !endDate) return "N/A";

  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = Math.abs(end - start);
  const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30.4375);
  const diffYears = diffMonths / 12;

  if (diffYears >= 1) {
    return `${Math.floor(diffYears)} year${
      Math.floor(diffYears) > 1 ? "s" : ""
    }`;
  } else {
    return `${Math.floor(diffMonths)} month${
      Math.floor(diffMonths) > 1 ? "s" : ""
    }`;
  }
};
