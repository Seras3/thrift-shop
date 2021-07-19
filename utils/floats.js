export const truncateNDecimals = (number, n) => {
  return parseInt(number * Math.pow(10, n)) / Math.pow(10, n);
};