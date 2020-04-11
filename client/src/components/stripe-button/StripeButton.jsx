import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { YOUR_OWN_KEY } from "./stripePublishableKey";

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = YOUR_OWN_KEY;
  const onToken = (token) => {
    console.log("The token: ", token);
    alert("Payment Successful");
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
