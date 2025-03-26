export const getRouteKey = (str) => {
  return str.toUpperCase().replace(/\s+/g, "_");
};
