const filterColors = (colors) => (product) =>
  !colors.length || colors.includes(product.color);

export default filterColors;
