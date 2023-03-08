import { CardElement } from "@stripe/react-stripe-js"
import "../component/payment_form/payment.css"
import { useStripe, useElements } from "@stripe/react-stripe-js"
import { useState } from "react";
import { useSelector } from "react-redux"
import { currentUser } from "../store/user/userSelector";
import { selectCartTotal } from "../store/cart/cart-selector";

const PaymentForm = () => {

    const stripe = useStripe();
    const element = useElements()
    const user = useSelector(currentUser)
    const totalCart = useSelector(selectCartTotal)
    const [paymentStatus, setPaymentStatus] = useState(false)

    const {displayName} = user
    console.log(displayName)
    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !element) {
            return;
        }

        const response = await fetch('/.netlify/functions/Create-payment-intent', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: totalCart * 100 })
        }).then(res => res.json());

        console.log(response)
        const {paymentIntent : {client_secret}} = response

        const paymentResult = await stripe.confirmCardPayment(client_secret,{
            payment_method:{
                "card" : element.getElement(CardElement),
                billing_details : {
                    name : displayName
                }
            }
        })
        if(paymentResult.error){
            alert('payment failed')
        }else if (paymentResult.paymentIntent.status === 'succeeded'){
            alert('payment successful')
        }
    }
        return (
            <div className="formContainer">

                <form onSubmit={paymentHandler}>
                    <h2 >credit card details</h2>
                    <CardElement className="ddd"/>

                    <button className="btn">pay now</button>
                </form>

            </div>
        )
    
}

export default PaymentForm
