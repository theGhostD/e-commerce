import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCartReducer],
  (cart) => cart.CartItem
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
    [selectCartItem],
    (CartItem) => CartItem.reduce(
        (total, CartItem) => total + CartItem.quantity,
        0
      )
)

export const selectCartTotal = createSelector(
    [selectCartItem],
    (CartItem) => CartItem.reduce(
        (total, CartItem) =>total + CartItem.quantity * CartItem.price,
        0
      )
)

// const theReduce = cartItemee.reduce(
//   (total, cartItemee) => total + cartItemee.quantity,
//   0
// );

// const thetotal = cartItemee.reduce(
//   (total, cartItemee) => total + cartItemee.quantity * cartItemee.price,
//   0
// );
