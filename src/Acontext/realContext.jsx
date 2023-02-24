import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createDocumentFromRes,
  onAuthStateChangelistener,
} from "../Asset/firebase";
import { createAction } from "../Asset/reducer/reducer.utils";
import { userActionType } from "../store/user/user.actionTypes";

export const UserContext = createContext({
  currentUser: null,
  SetcurrentUser: () => {},
});

// const currentUser : null
const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionType.setUser:
      return {
        ...state,
        currentUser: payload,
      };
  }
};

const InitailValue = {
  currentUser: null,
  //   SetcurrentUser: () => {},
};
export const Userprovider = ({ children }) => {

  const [state, dispatch] = useReducer(userReducer, InitailValue);
  // console.log(state)
  const { currentUser } = state;


  const SetcurrentUser = (user) => {
    dispatch(createAction(userActionType.setUser, user));
  };

  // const [currentUser, SetcurrentUser] = useState(null);

  const value = { currentUser, SetcurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangelistener((user) => {
      //   console.log(user);
      if (user) {
        createDocumentFromRes(user);
      }
      SetcurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
