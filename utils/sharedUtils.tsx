export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const formatMiles = (num) => {
  if (num >= 100000) {
    return (num / 100000).toFixed(2) + "k";
  }

  if (num >= 10000) {
    return (num / 10000).toFixed(1) + "k";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "k";
  }

  return num.toString();
};
