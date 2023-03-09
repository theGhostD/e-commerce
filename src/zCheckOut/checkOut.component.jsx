import React from "react";
import { useSelector } from "react-redux";
import { CardElement } from "@stripe/react-stripe-js";
import { selectCartTotal } from "../store/cart/cart-selector";
import CheckOutchild from "./childComponent/checkOut.child";
import { currentUser } from "../store/user/userSelector";
import PaymentForm from "../component/payment_form/PaymentForm";

const CheckOutcomponent = () => {
  const CartItem = useSelector(state => state.cart.CartItem)
  const cartTotal = useSelector(selectCartTotal)
  const user = useSelector(currentUser)

//   console.log(CartItem);

  return (
    <div className="wrapperCheck">
      <div className="static-info">
        <div>product</div>
        <div>description</div>
        <div>quantity</div>
        <div>price</div>
        <div>remove</div>
      </div>
      {CartItem.map((value) => {
        console.log(value);
        return <CheckOutchild theObj={value} key={value.id} />;
      })}
      <div className="totalPrice">
        <span>
          <h1>Total =</h1>
        </span>
     
        
        <h1>${cartTotal}</h1>
      </div>
      {
        user?<PaymentForm />: <h1>pls login</h1>
      }
      
    </div>
  );
};

export default CheckOutcomponent;
