import { createAction } from "../../Asset/reducer/reducer.utils";
import { userActionType } from "../user/user.actionTypes";

// setting the isCartOpen
export const setIsCartOpen = (boolean) => createAction(userActionType.isCartOpen, boolean);

// main function
export const onclickHandler = (CartItem,productToAdd) => {
  const newCartItem = conditionCart(CartItem, productToAdd);
  return createAction(userActionType.theAddToCart, newCartItem);
};

export const testHandler = (CartItem,ArrToAdd) => {
  const newCartItem = davidAdd(CartItem, ArrToAdd);
  return createAction(userActionType.theAddToCart, newCartItem);
};

export const removeFromCart = (CartItem,ProductToRemove) => {
  const newCartItem = feedbackk(CartItem, ProductToRemove);
  return createAction(userActionType.theAddToCart, newCartItem);
};


// helper function 
const feedbackk = (CartItem, ProductToRemove) => {
  const hhh = CartItem.filter((value) => {
    return value.id !== ProductToRemove.id;
  });
  return hhh;
};
const conditionCart = (CartItem, productToAdd) => {
  const existing = CartItem.find((value) => value.id === productToAdd.id);

  if (existing) {
    return CartItem.map((value) =>
      value.id === productToAdd.id
        ? {
            ...value,
            quantity: value.quantity + 1,
          }
        : value
    );
  }
  return [...CartItem, { ...productToAdd, quantity: 1 }];
};

const davidAdd = (CartItem, ArrToAdd) => {
  const theExisting = CartItem.map((CartItem) => CartItem.id === ArrToAdd.id);
  // console.log(theExisting.quantity)
  if (theExisting && ArrToAdd.quantity === 1) {
    const ddd = CartItem.filter((value) => value.id !== ArrToAdd.id);
    return ddd;
  }

  if (theExisting) {
    return CartItem.map((value) =>
      value.id === ArrToAdd.id
        ? {
            ...value,
            quantity: value.quantity - 1,
          }
        : value
    );
  }
};