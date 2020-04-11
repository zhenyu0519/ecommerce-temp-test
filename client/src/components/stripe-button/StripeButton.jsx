import React from "react";
// stripe component
import StripeCheckout from "react-stripe-checkout";
import { YOUR_OWN_KEY } from "./stripePublishableKey";
// axios
import axios from "axios";

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = YOUR_OWN_KEY;

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error:", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please ensure you use the provided credit card!"
        );
      });
  };

  return (
    <StripeCheckout
      label={`Pay $${price} Now`}
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
