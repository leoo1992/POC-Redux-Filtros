import { createSelector } from "reselect";
import filterColors from "./filterColors";
import filterPrices from "./filterPrices";

const getProductsData = (state) => state.products.data;
const getFilters = (state) => state.products.filters;

const filterProducts = createSelector(
  [getProductsData, getFilters],
  (data, filters) => {
    return data
      .filter(filterColors(filters.colors))
      .filter(filterPrices(filters.prices));
  }
);

export default filterProducts;
