// import { CardElement } from "@stripe/react-stripe-js"
// import PaystackPop from "@paystack/inline-js"
// import { useStripe, useElements } from "@stripe/react-stripe-js"
import "./payment.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../store/user/userSelector";
import { selectCartItem, selectCartTotal } from "../../store/cart/cart-selector";

import { usePaystackPayment } from "react-paystack";
import {  clearAllCart } from "../../store/cart/cart-reducer";

const PaymentForm = () => {
    // const stripe = useStripe();
    // const element = useElements()
    const totalCart = useSelector(selectCartTotal);
   
    const dispatch = useDispatch()
    
  

    const config = {
        reference: new Date().getTime().toString(),
        email: 'email@gmail.com',
        amount: totalCart * 100,
        publicKey: "pk_test_41dce7573356e246d5fb451747f79859c4190180",
    };

    const handleSuccess = (ref) => {
        if(ref.message === 'Approved'){
            dispatch(clearAllCart([]))
        }
    };

    const handleClose = () => console.log("cart");

    // for stripe payment
    // const paymentHandler = async (e) => {
    //     e.preventDefault();

    //     if (!stripe || !element) {
    //         return;
    //     }

    //     const response = await fetch('../../netlify/functions/Create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ amount: totalCart * 100 })
    //     }).then(res => res.json());

    //     console.log(response)
    //     const {paymentIntent : {client_secret}} = response

    //     const paymentResult = await stripe.confirmCardPayment(client_secret,{
    //         payment_method:{
    //             "card" : element.getElement(CardElement),
    //             billing_details : {
    //                 name : user? displayName : 'guest'
    //             }
    //         }
    //     })
    //     if(paymentResult.error){
    //         alert('payment failed')
    //     }else if (paymentResult.paymentIntent.status === 'succeeded'){
    //         alert('payment successful')
    //     }
    // }

    // for paystack
    // const paymentHandle = (e) => {
    //     e.preventDefault();
    //     const payStack = new PaystackPop()

    // }
    const initializePayment = usePaystackPayment(config);
  
    return (
        <div className="formContainer">
            <button
                className="paystack-button"
                onClick={() => {
                    initializePayment(handleSuccess, handleClose);
                }}
            >
                Pay ${totalCart} now
            </button>
        </div>
    );
};

export default PaymentForm;
