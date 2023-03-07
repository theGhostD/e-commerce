require("dotenv").config();

const stripe = require("stripe")(process.env.Stripe_Secret_key);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });


    return {
        statuscode : 200,
        body : JSON.stringify({paymentIntent})
    }

  } catch (error) {
    console.log(error)
    return{
        statuscode : 400,
        body:JSON.stringify({error})
    }
    
  }
};
