import { createSlice } from "@reduxjs/toolkit";
import { userActionType } from "./user.actionTypes";
// import 
const InitailValue = {
  currentUser: null,
  //   SetcurrentUser: () => {},
};


const userSlice = createSlice({
  name : "user",
  initialState : InitailValue,
  reducers : {
    setCurrentUser : (state,action)=>{
      state.currentUser = action.payload
    }
  }
})

export const userReducer = userSlice.reducer
export const {setCurrentUser} = userSlice.actions

// export const userReducer = (state = InitailValue, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case userActionType.setUser:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       return state;
//   }
// };
