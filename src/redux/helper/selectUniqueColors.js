import { createSelector } from "reselect";

const selectProducts = (state) => state.products.data;

const selectUniqueColors = createSelector([selectProducts], (products) => {
  return Array.from(
    new Set(
      products.map(
        ({ color }) => color.charAt(0).toUpperCase() + color.slice(1)
      )
    )
  );
});

export default selectUniqueColors;
