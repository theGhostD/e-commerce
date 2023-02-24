import { createSlice } from "@reduxjs/toolkit";
import { userActionType } from "../user/user.actionTypes";

const initialState = {
    TheProducts: {},
    isloading : true
  };
  

  const productSlice = createSlice({
    name : 'product',
    initialState: initialState,
    reducers : {
      getProducts: (state,action)=>{
        state.TheProducts = action.payload
      }

    }
  })


  export const {getProducts} = productSlice.actions
export const ProductReducer = productSlice.reducer
//  export const ProductReducer = (state = initialState, action) => {
//     const { type, payload } = action;
  
//     switch (type) {
//       case userActionType.getProducts:
//         return {
//           ...state,
//           TheProducts : payload,
//           isloading: false
//         };
//         default :
//         return state
//     }
//   };