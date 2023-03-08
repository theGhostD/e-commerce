import { createSlice } from "@reduxjs/toolkit";

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
const initialCartValue = {
  isCartOpen: false,
  CartItem: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartValue,
  reducers: {
    addToCart: (state, action) => {
      state.CartItem = conditionCart(state.CartItem, action.payload);
    },
    removingQuantity: (state, action) => {
      state.CartItem = davidAdd(state.CartItem, action.payload);
    },
    removeFromCart: (state, action) => {
      state.CartItem = feedbackk(state.CartItem, action.payload);
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setCart : (state,action)=> {
      state.CartItem = action.payload
    }
  },
});

export const {addToCart,removeFromCart,removingQuantity,setIsCartOpen,setCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;





// export const cartReducer = (state = initialCartValue, action) => {
//     const { type, payload } = action;
//     switch (type) {
//       case userActionType.theAddToCart:
//         return {
//           ...state,
//           CartItem : payload,
//         };
//       case userActionType.isCartOpen:
//         return {
//           ...state,
//           isCartOpen: payload,
//         };

//       default:
//         return state;
//     }
//   };
