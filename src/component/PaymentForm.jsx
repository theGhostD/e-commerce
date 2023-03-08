// import { CardElement } from "@stripe/react-stripe-js"

// import { useStripe, useElements } from "@stripe/react-stripe-js"
import "../component/payment_form/payment.css"
import { useState } from "react";
import { useSelector } from "react-redux"
import { currentUser } from "../store/user/userSelector";
import { selectCartTotal } from "../store/cart/cart-selector";
import PaystackPop from "@paystack/inline-js"


const PaymentForm = () => {

    // const stripe = useStripe();
    // const element = useElements()
    const user = useSelector(currentUser)
    const totalCart = useSelector(selectCartTotal)
    const [paymentStatus, setPaymentStatus] = useState(false)

    const { displayName, email } = user



    const handleSuccess = (ref) => console.log(ref);

    const handleClose = () => console.log('closed');

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
    const paymentHandle = (e) => {
        e.preventDefault();
        const payStack = new PaystackPop()
        payStack.newTransaction({
            key: "pk_test_41dce7573356e246d5fb451747f79859c4190180",
            amount: totalCart * 100,
            email,
            displayName,
            onsuccess: (ref) => {
                const message = `payment successful ${ref}`;
                alert(message)
            },
            oncancel: () => handleClose

        })
    }
    return (
        <div className="formContainer">

            <form onSubmit={paymentHandle}>

                {/* <CardElement className="ddd"/> */}

                <button className="paystack-button">Pay ${totalCart} now</button>
            </form>

        </div>
    )

}

export default PaymentForm
