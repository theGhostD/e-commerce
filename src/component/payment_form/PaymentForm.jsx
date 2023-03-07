import { CardElement } from "@stripe/react-stripe-js"
import "./payment.css"
import { useStripe,useElements } from "@stripe/react-stripe-js"

const PaymentForm = () => {
    const stripe = useStripe();
    const element = useElements()

    const paymentHandler = (e)=>{
        e.preventDefault();

        if(!stripe || !element) {
            return ;
        }

        const response = async ()=> fetch("")
    }


    return (
        <div className="formContainer">
            
            <form onSubmit={paymentHandler}>
            <h2>credit card details</h2>
                <CardElement className="ddd"/>
                <button className="btn">pay now</button>
            </form>

        </div>
    )
}

export default PaymentForm
