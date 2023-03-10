import { createSelector } from "reselect";

const ProductReducer = (state) => state.products;

export const productSelect = createSelector(
    [ProductReducer],
    (products ) => products.TheProducts
)