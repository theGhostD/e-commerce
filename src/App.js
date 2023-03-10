import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import {
  createDocumentFromRes,
  onAuthStateChangelistener,
} from "./Asset/firebase";
import Home from "./component/Home.component";
import Navigation from "./component/navigation/navigation.component";
import SignIn from "./component/SignIn/signIn";
import TheSignUp from "./component/signUp/signUp.component";
// import SignInPage from './testing/signin.testing'
import Shop from "./SHOP/indexShopComponent/shop";
import CheckOutcomponent from "./zCheckOut/checkOut.component";

// import { SetcurrentUser } from "./store/user/user.action";
import { setCurrentUser } from "./store/user/user.reducer";
import { useDispatch } from "react-redux";
import TestPreview from "./SHOP/try/test";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangelistener((user) => {
      if (user) {
        createDocumentFromRes(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<TheSignUp />} />
        <Route path="checkOut" element={<CheckOutcomponent />} />
      </Route>
    </Routes>
  );
};
export default App;
