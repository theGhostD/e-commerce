import { useReducer } from "react";
import { createContext } from "react";
import { createAction } from "../../../Asset/reducer/reducer.utils";
import { userActionType } from "../../../store/user/user.actionTypes";

const conditionCart = (CartItem, productToAdd) => {
  console.log(CartItem, "kkk");
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
export const Cartcontext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItem: [],
  setCartItem: () => {},
  onclickHandler: () => {},
  testHandler: () => {},
  cartCount: 0,
  removeFromCart: () => {},
  cartTotal: 0,
});



const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionType.theAddToCart:
      return {
        ...state,
        ...payload,
      };
    case userActionType.isCartOpen:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error("cant find type");
  }
};
const initialCartValue = {
  isCartOpen: false,
  CartItem: [],
  // setCartItem: () => {},
  cartCount: 0,
  cartTotal: 0,
};
export const CartcontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartValue);

  const { CartItem, cartCount, cartTotal, isCartOpen } = state;

  const updateState = (cartItemee) => {
    const theReduce = cartItemee.reduce(
      (total, cartItemee) => total + cartItemee.quantity,
      0
    );

    const thetotal = cartItemee.reduce(
      (total, cartItemee) => total + cartItemee.quantity * cartItemee.price,
      0
    );

    dispatch(
      createAction(userActionType.theAddToCart, {
        CartItem: cartItemee,
        cartTotal: thetotal,
        cartCount: theReduce,
      })
    );
  };

  const setIsCartOpen = (bool) =>
    dispatch(createAction(userActionType.isCartOpen, bool));

    
  //adding product
  const onclickHandler = (productToAdd) => {
    console.log(CartItem);
    const newCartItem = conditionCart(CartItem, productToAdd);
    updateState(newCartItem);
  };
  
  const testHandler = (ArrToAdd) => {
    const newCartItem = davidAdd(CartItem, ArrToAdd);
    updateState(newCartItem);
  };

  const removeFromCart = (ProductToRemove) => {
    const newCartItem = feedbackk(CartItem, ProductToRemove);
    updateState(newCartItem);
  };

  const feedbackk = (CartItem, ProductToRemove) => {
    const hhh = CartItem.filter((value) => {
      return value.id !== ProductToRemove.id;
    });
    return hhh;
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    CartItem,
    onclickHandler,
    cartCount,
    // setCartItem,
    testHandler,
    removeFromCart,
    cartTotal,
  };

  return <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>;
};
